<template>
  <Layout>
    <main class="2xl:container mx-auto p-4">
      <Button
        label="Show"
        @click="visible = true"
        class="bg-rose-600 py-2 px-4 rounded-full font-bold"
        unstyled
        >Add Artist</Button
      >
      <!--Form Modal-->
      <Dialog
        v-model:visible="visible"
        modal
        header="Add Artist"
        :style="{ width: '50vw' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <span class="text-surface-500 dark:text-surface-400 block mb-8"
          >Enter artist&apos;s information.</span
        >
        <form
          @submit="
            (e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }
          "
        >
          <div class="mb-3">
            <form.Field name="artistImg">
              <template v-slot="{ field }">
                <div class="w-full py-9 rounded border border-gray-700 gap-3 grid border-dashed">
                  <div
                    v-if="!field.state.value || field.state.value.length == 0"
                    class="grid gap-1"
                  >
                    <h1 class="text-center text-white text-lg">Upload Artist Image</h1>
                    <h5 class="text-center text-gray-400 text-xs leading-4">
                      PNG, JPG smaller than 5MB
                    </h5>
                  </div>
                  <div v-else class="px-10 w-fit mx-auto">
                    <!--@vue-ignore-->
                    <img
                      v-if="field.state.value && field.state.value[0]"
                      :src="handleImageSrc(field.state.value[0])"
                      alt="Uploaded artist img"
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
          <div class="mb-3">
            <form.Field name="artistName">
              <template v-slot="{ field }">
                <label :for="field.name" class="font-semibold block mb-2">Artist Name</label>
                <InputText
                  :id="field.name"
                  :name="field.name"
                  @blur="field.handleBlur"
                  @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
                  class="w-full"
                  autocomplete="off"
                />
                <em
                  role="alert"
                  v-if="field.state.meta.errors"
                  class="text-pink-700 text-sm text-center"
                >
                  {{ field.state.meta.errors.join(', ') }}
                </em>
              </template>
            </form.Field>
          </div>
          <div class="mb-8">
            <form.Field name="artistBio">
              <template v-slot="{ field }">
                <label :for="field.name" class="font-semibold block mb-2">Bio</label>
                <Textarea
                  :id="field.name"
                  :name="field.name"
                  @blur="field.handleBlur"
                  @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
                  class="w-full"
                  autocomplete="off"
                ></Textarea>
                <em
                  role="alert"
                  v-if="field.state.meta.errors"
                  class="text-pink-700 text-sm text-center"
                >
                  {{ field.state.meta.errors.join(', ') }}
                </em>
              </template>
            </form.Field>
          </div>
          <div class="flex justify-end gap-2">
            <Button
              type="button"
              label="Cancel"
              severity="secondary"
              @click="
                () => {
                  visible = false
                  form.reset()
                  revokeImgSrc()
                }
              "
            ></Button>
            <form.Subscribe>
              <template v-slot="{ canSubmit, isSubmitting }">
                <Button
                  class="bg-rose-600 py-2 px-3 rounded hover:bg-rose-800 disabled:bg-rose-400 transition duration-150 ease-in-out"
                  type="submit"
                  :label="isSubmitting ? 'Saving...' : 'Save'"
                  :disabled="!canSubmit"
                  unstyled
                ></Button>
              </template>
            </form.Subscribe>
          </div>
        </form>
      </Dialog>
      <!--Artist Data View-->
      <ArtistDataView :artists="artists" />
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
import { Button, Textarea } from 'primevue'
import { onBeforeUnmount, ref } from 'vue'
import { useForm } from '@tanstack/vue-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import ArtistDataView from '@/components/ArtistDataView.vue'
import type { Artist } from '@/services/types/type'

const MAX_FILE_SIZE = 1024 * 1024 * 5

const visible = ref<boolean>(false)

const form = useForm({
  defaultValues: {
    artistName: '',
    artistBio: '',
    artistImg: undefined,
  },
  onSubmit: async ({ value }) => {
    console.log(value)
  },
  validatorAdapter: zodValidator(),
  validators: {
    onChange: z.object({
      artistName: z.string().min(1, 'Album title is required'),
      artistImg: z
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

const revokeImgSrc = () => {
  if (objectUrl) URL.revokeObjectURL(objectUrl)
}

const artists: Artist[] = [
  {
    id: 'art1',
    name: 'Charlie Puth',
    image: 'https://i.scdn.co/image/ab6761610000e5ebf83823555da55fd07555fbd0',
  },
  {
    id: 'art2',
    name: 'Taylor Swift',
    image: 'https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676',
  },
]

onBeforeUnmount(revokeImgSrc)
</script>
