<template>
  <div class="min-h-screen bg-background">
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-500/10 via-accent/10 to-background py-16 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="grid md:grid-cols-[1.2fr,1fr] items-center gap-10">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              {{ cvProfile.name }}
            </h1>
            <p class="text-lg text-muted-foreground">{{ cvProfile.title }}</p>
            <p class="text-muted-foreground leading-relaxed">
              {{ cvProfile.summary }}
            </p>
            <div class="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4" /> {{ cvProfile.location }}
              </span>
              <a :href="`mailto:${cvProfile.email}`" class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:text-accent">
                <UIcon name="i-lucide-mail" class="w-4 h-4" /> {{ cvProfile.email }}
              </a>
              <a :href="cvProfile.github" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:text-accent">
                <UIcon name="i-lucide-github" class="w-4 h-4" /> GitHub
              </a>
              <a :href="cvProfile.linkedin" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:text-accent">
                <UIcon name="i-lucide-linkedin" class="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 blur-3xl bg-accent/20 translate-x-6 translate-y-6 rounded-full" />
            <div class="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-2xl mx-auto">
              <img :src="avatar" :alt="cvProfile.name" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 px-4">
      <div class="container mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
        <div class="bg-card border border-border rounded-2xl p-5 shadow-sm">
          <p class="text-sm text-muted-foreground mb-1">Expérience</p>
          <p class="text-3xl font-bold text-foreground">6+ ans</p>
          <p class="text-sm text-muted-foreground mt-2">Architecture, lead dev & IA appliquée</p>
        </div>
        <div class="bg-card border border-border rounded-2xl p-5 shadow-sm">
          <p class="text-sm text-muted-foreground mb-1">Stack</p>
          <p class="text-3xl font-bold text-foreground">Python · TS</p>
          <p class="text-sm text-muted-foreground mt-2">FastAPI, Vue/Nuxt, React, AWS</p>
        </div>
      </div>
    </section>

    <section class="py-4 px-4">
      <div class="container mx-auto max-w-5xl grid md:grid-cols-[1.6fr,1fr] gap-6">
        <div class="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-briefcase" class="w-4 h-4 text-accent" />
            <h2 class="text-lg font-semibold text-foreground">Expériences clés</h2>
          </div>
          <div class="space-y-4">
            <article
              v-for="exp in cvExperiences"
              :key="exp.title"
              class="p-4 rounded-xl bg-muted/60 border border-border"
            >
              <div class="flex justify-between gap-2">
                <div>
                  <h3 class="font-semibold text-foreground">{{ exp.title }}</h3>
                  <p class="text-sm text-muted-foreground">{{ exp.company }}</p>
                </div>
                <span class="text-xs text-muted-foreground">{{ exp.period }}</span>
              </div>
              <ul class="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li v-for="item in exp.bullets" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="space-y-4">
          <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-lucide-graduation-cap" class="w-4 h-4 text-accent" />
              <h2 class="text-lg font-semibold text-foreground">Formation</h2>
            </div>
            <div class="space-y-3 text-sm">
              <div
                v-for="edu in cvEducation"
                :key="edu.school"
                class="border-l-2 border-accent/40 pl-3"
              >
                <p class="font-semibold text-foreground">{{ edu.school }}</p>
                <p class="text-muted-foreground text-xs">{{ edu.period }}</p>
              </div>
            </div>
          </div>

          <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-lucide-sparkles" class="w-4 h-4 text-accent" />
              <h2 class="text-lg font-semibold text-foreground">Compétences</h2>
            </div>
            <div class="space-y-2 text-sm text-muted-foreground">
              <p><span class="text-foreground font-medium">Langages :</span> {{ cvSkills.languages.join(', ') }}</p>
              <p><span class="text-foreground font-medium">Cloud & data :</span> {{ cvSkills.cloud.join(', ') }}</p>
              <p><span class="text-foreground font-medium">Outils :</span> {{ cvSkills.tools.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { cvAvatar, cvEducation, cvExperiences, cvProfile, cvSkills } from '~/data/cv';

const avatar = cvAvatar;
</script>

