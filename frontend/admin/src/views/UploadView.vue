<template>
  <Layout>
    <main class="2xl:container mx-auto p-4">
      <h1 class="text-3xl font-black text-white mb-5">Upload</h1>
      <form
        class="flex flex-col gap-3"
        @submit="
          (e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }
        "
      >
        <div>
          <form.Field name="albumTitle">
            <template v-slot="{ field }">
              <FloatLabel variant="on">
                <InputText
                  class="w-full"
                  :id="field.name"
                  :name="field.name"
                  :value="field.state.value"
                  @blur="field.handleBlur"
                  @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
                />
                <label :for="field.name">Album Title</label>
              </FloatLabel>
              <em role="alert" v-if="field.state.meta.errors" class="text-pink-700 text-sm">
                {{ field.state.meta.errors.join(', ') }}
              </em>
            </template>
          </form.Field>
        </div>

        <div>
          <form.Field name="artCover">
            <template v-slot="{ field }">
              <div class="w-full py-9 rounded border border-gray-700 gap-3 grid border-dashed">
                <div v-if="!field.state.value || field.state.value.length == 0" class="grid gap-1">
                  <h1 class="text-center text-white text-lg">Upload Art Cover</h1>
                  <h5 class="text-center text-gray-400 text-xs leading-4">
                    PNG, JPG smaller than 5MB
                  </h5>
                </div>
                <div v-else class="px-10 w-fit mx-auto">
                  <!--@vue-ignore-->
                  <img
                    v-if="field.state.value && field.state.value[0]"
                    :src="handleImageSrc(field.state.value[0])"
                    alt="Uploaded art cover"
                    class="w-full h-auto object-cover rounded"
                  />
                </div>

                <div class="flex items-center justify-center">
                  <label>
                    <!--@vue-ignore-->
                    <input
                      hidden
                      type="file"
                      :id="field.name"
                      :name="field.name"
                      @blur="field.handleBlur"
                      @change="(e) => field.handleChange((e.target as HTMLInputElement).files)"
                      accept="image/jpg, image/jpeg, image/png"
                    />
                    <div
                      class="flex w-28 h-9 px-2 flex-col bg-rose-500 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none"
                    >
                      Choose File
                    </div>
                  </label>
                </div>

                <em
                  role="alert"
                  v-if="field.state.meta.errors"
                  class="text-pink-700 text-sm text-center"
                >
                  {{ field.state.meta.errors.join(', ') }}
                </em>
              </div>
            </template>
          </form.Field>
        </div>

        <form.Subscribe>
          <template v-slot="{ canSubmit, isSubmitting }">
            <button
              type="submit"
              :disabled="!canSubmit"
              class="bg-neutral-100 text-black px-4 py-2 rounded-full font-bold disabled:bg-neutral-400 disabled:text-neutral-800"
            >
              {{ isSubmitting ? '...' : 'Submit' }}
            </button>
          </template>
        </form.Subscribe>
      </form>
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
import { useForm } from '@tanstack/vue-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import { FloatLabel, InputText } from 'primevue'
import { onBeforeUnmount } from 'vue'

const MAX_FILE_SIZE = 1024 * 1024 * 5

const form = useForm({
  defaultValues: {
    albumTitle: '',
    artCover: undefined,
  },
  onSubmit: async ({ value }) => {
    console.log(value)
  },
  validatorAdapter: zodValidator(),
  validators: {
    onChange: z.object({
      albumTitle: z.string().min(1, 'Album title is required'),
      artCover: z
        .any()
        .refine((files) => {
          return files && files.length > 0
        }, 'Image is required')
        .refine((files) => {
          return files?.[0]?.size <= MAX_FILE_SIZE
        }, `Max image size is 5MB.`),
    }),
  },
})

let objectUrl: string | null = null

const handleImageSrc = (file: File) => {
  if (objectUrl) URL.revokeObjectURL(objectUrl) // Clean up previous URL
  objectUrl = URL.createObjectURL(file)
  return objectUrl
}

onBeforeUnmount(() => {
  if (objectUrl) URL.revokeObjectURL(objectUrl) // Clean up on component unmount
})
</script>
