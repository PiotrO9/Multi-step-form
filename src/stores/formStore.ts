import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    validateAndSubmitForm: null as (() => Promise<boolean>) | null
  }),
  mutations: {},
  actions: {
    setFormValidationAndSubmission(validateAndSubmit: () => Promise<boolean>) {
      this.validateAndSubmitForm = validateAndSubmit
    },
    async validateAndSubmit() {
      if (this.validateAndSubmitForm) {
        return await this.validateAndSubmitForm()
      }
      return false
    }
  }
})
