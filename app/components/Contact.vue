<script lang="ts" setup>
import { z } from 'zod'

const toast = useToast()

const schema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z
    .email('Adresse e-mail invalide'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactInput = z.infer<typeof schema>

const state = reactive<ContactInput>({
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)

const onSubmit = async () => {
  loading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: state,
    })

    toast.add({
      title: 'Message envoyé',
      description: 'Merci, je reviens vers toi rapidement.',
      color: 'success',
    })

    state.name = ''
    state.email = ''
    state.message = ''
  } catch (error) {
    console.error(error)
    toast.add({
      title: 'Erreur',
      description: 'Impossible d\'envoyer le message. Réessaie plus tard.',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <section id="contact" class="py-24 bg-linear-to-br bg-white">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl text-gray-950 font-bold mb-4">Contactez-moi</h2>
          <p class="text-xl text-neutral-500 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons ensemble la meilleure solution
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div class="space-y-6">
                <UCard class="border-0 bg-white">
                    <template #header style="border-bottom: 0px;">
                        <p class="text-gray-950 text-2xl font-bold">Informations de contact</p>
                        <p class="text-neutral-500">
                            Plusieurs moyens de me joindre
                        </p>

                    </template>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-400 flex items-center justify-center">
                            <UIcon name="i-lucide-mail" class="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <div class="font-medium text-gray-950">Email</div>
                            <div class="text-neutral-500">contact@yamanio.com</div>
                        </div>
                        </div>
                        
                        <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-400 flex items-center justify-center">
                            <UIcon name="i-lucide-phone" class="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <div class="font-medium text-gray-950">Téléphone</div>
                            <div class="text-neutral-500">+33 1 23 45 67 89</div>
                        </div>
                        </div>
                        
                        <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-400 flex items-center justify-center">
                            <UIcon name="i-lucide-map" class="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <div class="font-medium text-gray-950">Adresse</div>
                            <div class="text-neutral-500">Paris, France</div>
                        </div>
                        </div>
                    </div>
                </UCard>
            </div>
            <UCard class=" bg-white">
              <template #header style="border-bottom: 0px;">
                <p class="text-gray-950 text-2xl font-bold">Envoyez-moi un message</p>
                <p class="text-neutral-500">
                  Plusieurs moyens de me joindre
                </p>
              </template>

              
              <UForm
                class="bg-white m-5 justify-center space-y-4"
                :schema="schema"
                :state="state"
                @submit="onSubmit"
              >
                <UFormField label="Nom" name="name">
                  <UInput
                    v-model="state.name"
                    placeholder="Votre nom"
                    type="text"
                    class="w-full bg-white mb-5"
                  />
                </UFormField>

                <UFormField label="Email" name="email">
                  <UInput
                    v-model="state.email"
                    trailing-icon="i-lucide-at-sign"
                    placeholder="Votre email"
                    size="md"
                    class="w-full mb-5"
                  />
                </UFormField>

                <UFormField label="Message" name="message">
                  <UTextarea
                    v-model="state.message"
                    placeholder="Décrivez votre projet ou votre besoin"
                    class="w-full mb-5"
                    :rows="5"
                  />
                </UFormField>
               
                <UButton
                  type="submit"
                  :loading="loading"
                  class="w-full justify-center text-center bg-secondary-600 hover:bg-secondary-500"
                  loading-icon="i-lucide-loader"
                >
                  Envoyer le message
                </UButton>
              </UForm>
            </UCard>
        </div>
      </div>
  </section>
</template>

