import { defineStore } from 'pinia'

export const useContextStore = defineStore('context', {
  state: () => {
    return { isMobileMenuOpen: false }
  },

  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },
})
