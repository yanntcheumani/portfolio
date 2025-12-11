<template>
  <section
    class="relative flex min-h-screen items-center justify-center bg-linear-to-br from-secondary-500 via-secondary-700 to-secondary-900 overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(66,220,219,0.1),transparent_50%)]"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(66,220,219,0.15),transparent_50%)]"
    />

    <div class="container relative z-10 mx-auto px-4 text-center">
      <div class="mx-auto max-w-4xl space-y-8 animate-fade-in">
        <h1 class="text-5xl font-bold text-white leading-tight md:text-7xl">
          Transformez vos idées en
          <span class="text-primary-500">solutions digitales</span>
        </h1>

        <p
          class="mx-auto max-w-2xl text-xl text-white md:text-2xl"
        >
          Expertise en développement web, mobile, data analyse et ETL pour propulser
          votre entreprise vers l'avenir
        </p>

        <div class="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <UButton
            size="lg"
            class="bg-primary-600 text-dark-400 hover:bg-accent-500 text-lg px-8 py-6"
            v-on:click="gotoContact"
          >
            Discutons de votre projet
            <UIcon name="i-lucide-arrow-right"/>
          </UButton>

          <UButton
            size="lg"
            variant="outline"
            class="border-2 border-accent-500 text-accent-500 hover:bg-primary-500 hover:text-white text-lg px-8 py-6 bg-white"
            to="#Services"
            v-on:click="gotoService"
          >
            Mes services
          </UButton>
          <UButton 
                  size="lg" 
                  variant="ghost" 
                  class="text-accent-500 hover:text-neutral-800 hover:bg-primary-800 text-lg px-8 py-6 gap-2"
                  to="/me"
                >
                  <UIcon name="i-lucide-file-user" class="w-5 h-5" />
                  Mon CV
                </UButton>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-35 bg-linear-to-t from-white to-transparent" />
  </section>
</template>


<script lang="ts" setup>
  const gotoContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  const gotoService = () => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })
</script>