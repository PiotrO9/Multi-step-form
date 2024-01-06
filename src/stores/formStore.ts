import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    validateAndSubmitForm: null as (() => Promise<boolean>) | null,
    currentStep: 1
  }),
  actions: {
    setFormValidationAndSubmission(validateAndSubmit: () => Promise<boolean>) {
      this.validateAndSubmitForm = validateAndSubmit
    },
    async validateAndSubmit() {
      if (this.validateAndSubmitForm) {
        return await this.validateAndSubmitForm()
      }
      return false
    },
    setCurrentStep(step: number): void {
      this.currentStep = step
    }
  },
  getters: {
    getCurrentStep(): number {
      return this.currentStep
    }
  }
})
