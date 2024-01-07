import { defineStore } from 'pinia'
import type { DataSummary } from '../types/dataSummary'

interface FormStoreProps extends DataSummary {
  validateAndSubmitForm: null | (() => Promise<boolean>)
  currentStep: number
}

export const useFormStore = defineStore('formStore', {
  state: (): FormStoreProps => ({
    validateAndSubmitForm: null as (() => Promise<boolean>) | null,
    currentStep: 1,
    isPlanYearly: false,
    selectedPlanName: 'Arcade',
    addons: [] as string[]
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
    },
    setPlanPeriod(value: boolean): void {
      this.isPlanYearly = value
    },
    setPlanName(planName: string): void {
      this.selectedPlanName = planName
    },
    addAddon(addonName: string): void {
      this.addons.push(addonName)
      this.addons = Array.from(new Set(this.addons))
    },
    removeAddon(addonName: string): void {
      this.addons = this.addons.filter((addon: string) => addon != addonName)
    }
  },
  getters: {
    getCurrentStep(): number {
      return this.currentStep
    },
    getPlanPeriod(): boolean {
      return this.isPlanYearly
    },
    getSelectedPlanName(): string {
      return this.selectedPlanName
    },
    getAddons(): string[] {
      return this.addons
    },
    getDataSummary(): DataSummary {
      return {
        isPlanYearly: this.isPlanYearly,
        selectedPlanName: this.selectedPlanName,
        addons: this.addons
      } as DataSummary
    }
  }
})
