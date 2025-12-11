<template>
  <div class="min-h-screen bg-background py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-border rounded-full mb-4">
          <UIcon name="i-lucide-sparkles" class="w-4 h-4 text-accent" />
          <span class="text-sm font-medium text-accent">Choisis ton style</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
          3 façons de présenter mon <span class="text-accent">CV</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Chaque version met en avant mon parcours, mes compétences et mon avatar avec un angle graphique différent.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="option in cvOptions"
          :key="option.id"
          :to="option.path"
          class="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div
            class="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            :class="option.gradient"
          />
          <div class="p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-4xl">{{ option.emoji }}</div>
              <div>
                <h3 class="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {{ option.title }}
                </h3>
                <p class="text-xs text-muted-foreground">{{ option.subtitle }}</p>
              </div>
            </div>

            <p class="text-muted-foreground text-sm mb-4 leading-relaxed">
              {{ option.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in option.tags"
                :key="tag"
                class="px-2 py-1 rounded-full text-xs font-medium bg-muted text-foreground"
              >
                {{ tag }}
              </span>
            </div>

            <div
              class="mt-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors"
            >
              <UIcon name="i-lucide-arrow-right" class="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center mt-12">
        <p class="text-muted-foreground text-sm">
          💡 Astuce: explore chaque page pour voir des mises en forme différentes (classique, timeline, hero).
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cvOptions = [
  {
    id: 'classic',
    title: 'CV Classique',
    subtitle: 'Lisible et structuré',
    description: 'Une mise en page sobre avec une colonne profil et une colonne contenu pour un rendu print-friendly.',
    tags: ['Profil', 'Formation', 'Expériences'],
    emoji: '📄',
    path: '/me/classic',
    gradient: 'from-accent/30 via-primary-500/20 to-transparent',
  },
  // {
  //   id: 'timeline',
  //   title: 'CV Timeline',
  //   subtitle: 'Parcours chronologique',
  //   description: 'Une frise chronologique mettant en valeur les jalons majeurs et les missions clés.',
  //   tags: ['Timeline', 'Tech stack', 'Focus impact'],
  //   emoji: '🗂️',
  //   path: '/me/timeline',
  //   gradient: 'from-primary-400/30 via-accent/20 to-transparent',
  // },
  {
    id: 'hero',
    title: 'CV Hero',
    subtitle: 'Profil expressif',
    description: 'Un layout hero avec avatar mis en avant, accroche et cartes synthétiques des compétences.',
    tags: ['Avatar', 'Hero', 'Compétences'],
    emoji: '🚀',
    path: '/me/hero',
    gradient: 'from-secondary-400/30 via-accent/20 to-transparent',
  },
];
</script>

<style></style>