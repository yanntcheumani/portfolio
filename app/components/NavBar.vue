<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
{
  label: 'Acceuil',
  to: '/',
  icon: 'i-lucide-house',
  active: route.path.startsWith('/Acceuil')
}, 
{
  label: 'Projets',
  to: '/projets',
  icon: 'i-lucide-pencil-ruler',
  active: route.path.startsWith('/project')
}
])
</script>

<template>
  <UHeader class=" bg-transparent border-0">
    <template #title>
      <h1 className="font-bold leading-tight">
        Yaman<span className="text-primary-500">IO</span>
      </h1>
    </template>

    <UNavigationMenu :items="items" />
    <p class="flex items-center justify-between">
      <span class="text-neutral-400 p-5 ">
        Statut
      </span>
      <span class="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
        Disponible
      </span>
    </p>
    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/yanntcheumani"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="horizontal" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

