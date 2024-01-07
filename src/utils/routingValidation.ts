import { useFormStore } from '@/stores/formStore'
import { useRouter, useRoute } from 'vue-router'

export const routingValidation = (): void => {
  const formStore = useFormStore()
  const router = useRouter()
  const route = useRoute()

  const currentStep = formStore.getCurrentStep
  const routeId = route.params.id

  const parsedId = typeof routeId === 'string' ? parseInt(routeId, 10) : null

  if (!parsedId || parsedId < 1 || parsedId > 5) {
    router.push(`/step/${currentStep}`)
  }
}
