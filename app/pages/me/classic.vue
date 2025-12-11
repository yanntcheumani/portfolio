<template>
  <div class="min-h-screen bg-background py-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <div class="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
        <div class="grid md:grid-cols-3">
          <aside class="bg-muted/40 p-8 md:border-r border-border">
            <div class="flex flex-col items-center text-center">
              <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-accent shadow-md mb-4">
                <img :src="avatar" :alt="cvProfile.name" class="w-full h-full object-cover" />
              </div>
              <h1 class="text-2xl font-bold text-foreground">{{ cvProfile.name }}</h1>
              <p class="text-sm text-muted-foreground">{{ cvProfile.title }}</p>
            </div>

            <div class="mt-6 space-y-3 text-sm">
              <div class="flex items-center gap-2 text-muted-foreground">
                <UIcon name="i-lucide-mail" class="w-4 h-4" />
                <a :href="`mailto:${cvProfile.email}`" class="hover:text-accent">{{ cvProfile.email }}</a>
              </div>
              <div class="flex items-center gap-2 text-muted-foreground">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                <span>{{ cvProfile.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-muted-foreground">
                <UIcon name="i-lucide-github" class="w-4 h-4" />
                <a :href="cvProfile.github" target="_blank" rel="noreferrer" class="hover:text-accent">GitHub</a>
              </div>
              <div class="flex items-center gap-2 text-muted-foreground">
                <UIcon name="i-lucide-linkedin" class="w-4 h-4" />
                <a :href="cvProfile.linkedin" target="_blank" rel="noreferrer" class="hover:text-accent">LinkedIn</a>
              </div>
            </div>

            <div class="mt-8">
              <h2 class="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Compétences</h2>
              <div class="space-y-3 text-sm">
                <div>
                  <p class="font-medium text-foreground mb-1">Langages & frameworks</p>
                  <p class="text-muted-foreground">{{ cvSkills.languages.join(', ') }}</p>
                </div>
                <div>
                  <p class="font-medium text-foreground mb-1">Cloud & data</p>
                  <p class="text-muted-foreground">{{ cvSkills.cloud.join(', ') }}</p>
                </div>
                <div>
                  <p class="font-medium text-foreground mb-1">Outils</p>
                  <p class="text-muted-foreground">{{ cvSkills.tools.join(', ') }}</p>
                </div>
              </div>
            </div>
          </aside>

          <main class="md:col-span-2 p-8 space-y-10">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <UIcon name="i-lucide-user" class="w-4 h-4 text-accent" />
                <h2 class="text-lg font-semibold text-foreground">Profil</h2>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                {{ cvProfile.summary }}
              </p>
            </section>

            <section>
              <div class="flex items-center gap-2 mb-4">
                <UIcon name="i-lucide-book-open" class="w-4 h-4 text-accent" />
                <h2 class="text-lg font-semibold text-foreground">Formation</h2>
              </div>
              <div class="space-y-6">
                <article
                  v-for="edu in cvEducation"
                  :key="edu.school"
                  class="border-l-2 border-accent/40 pl-4"
                >
                  <div class="flex flex-wrap justify-between gap-2">
                    <h3 class="font-semibold text-foreground">{{ edu.school }}</h3>
                    <span class="text-xs text-muted-foreground">{{ edu.period }}</span>
                  </div>
                  <ul class="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li v-for="item in edu.details" :key="item">{{ item }}</li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <div class="flex items-center gap-2 mb-4">
                <UIcon name="i-lucide-briefcase" class="w-4 h-4 text-accent" />
                <h2 class="text-lg font-semibold text-foreground">Expériences</h2>
              </div>
              <div class="space-y-6">
                <article
                  v-for="exp in cvExperiences"
                  :key="exp.title"
                  class="rounded-xl border border-border p-4 shadow-sm"
                >
                  <div class="flex flex-wrap justify-between gap-2">
                    <div>
                      <h3 class="font-semibold text-foreground">{{ exp.title }}</h3>
                      <p class="text-sm text-muted-foreground">{{ exp.company }}</p>
                    </div>
                    <span class="text-xs text-muted-foreground">{{ exp.period }}</span>
                  </div>
                  <ul class="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                    <li v-for="item in exp.bullets" :key="item">{{ item }}</li>
                  </ul>
                </article>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cvAvatar, cvEducation, cvExperiences, cvProfile, cvSkills } from '~/data/cv';

const avatar = cvAvatar;
</script>

