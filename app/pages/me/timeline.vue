<template>
  <div class="min-h-screen bg-background py-12 px-4">
    <div class="container mx-auto max-w-5xl space-y-12">
      <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-accent shadow-md">
            <img :src="avatar" :alt="cvProfile.name" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="text-sm uppercase tracking-wide text-muted-foreground">CV Timeline</p>
            <h1 class="text-3xl font-bold text-foreground">{{ cvProfile.name }}</h1>
            <p class="text-muted-foreground">{{ cvProfile.title }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <a :href="`mailto:${cvProfile.email}`" class="inline-flex items-center gap-2 hover:text-accent">
            <UIcon name="i-lucide-mail" class="w-4 h-4" /> {{ cvProfile.email }}
          </a>
          <span class="inline-flex items-center gap-2">
            <UIcon name="i-lucide-phone" class="w-4 h-4" /> {{ cvProfile.phone }}
          </span>
          <span class="inline-flex items-center gap-2">
            <UIcon name="i-lucide-map-pin" class="w-4 h-4" /> {{ cvProfile.location }}
          </span>
        </div>
      </header>

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
        <div class="flex items-center gap-2 mb-6">
          <UIcon name="i-lucide-clock" class="w-4 h-4 text-accent" />
          <h2 class="text-lg font-semibold text-foreground">Expériences</h2>
        </div>
        <div class="relative pl-10">
          <div ref="timelineLine" class="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div
            class="absolute -left-2 top-0 w-10"
            :style="{ transform: `translateY(${Math.max(0, Math.min(lineHeight, avatarOffset))}px)` }"
          >
            <div class="sticky top-32">
              <div class="w-10 h-10 rounded-full border-2 border-accent bg-card shadow-lg overflow-hidden">
                <img :src="avatar" :alt="cvProfile.name" class="w-full h-full object-cover" />
              </div>
              <div class="mt-2 text-xs text-center text-muted-foreground">
                {{ currentExp?.title || 'Scroll' }}
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <article
              v-for="(exp, idx) in cvExperiences"
              :key="exp.title"
              :ref="setExpRefs"
              class="relative group"
            >
              <div
                class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300"
                :class="idx === activeIndex ? 'bg-accent border-accent' : 'bg-background border-accent/60'"
              />
              <div
                class="bg-card border border-border rounded-xl shadow-sm p-5 transition-transform duration-300"
                :class="idx === activeIndex ? 'scale-[1.01] border-accent/60 shadow-xl' : ''"
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
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="grid md:grid-cols-2 gap-6">
        <div class="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div class="flex items-center gap-2 mb-4">
            <UIcon name="i-lucide-graduation-cap" class="w-4 h-4 text-accent" />
            <h2 class="text-lg font-semibold text-foreground">Formation</h2>
          </div>
          <div class="space-y-4">
            <article
              v-for="edu in cvEducation"
              :key="edu.school"
              class="border-l-2 border-accent/40 pl-3 mb-5"
            >
              <div class="flex justify-between gap-2">
                <h3 class="font-semibold text-foreground">{{ edu.school }}</h3>
                <span class="text-xs text-muted-foreground">{{ edu.period }}</span>
              </div>
              <ul class="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li v-for="item in edu.details" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="bg-card border border-border rounded-xl p-5 shadow-sm space-y-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-sparkles" class="w-4 h-4 text-accent" />
            <h2 class="text-lg font-semibold text-foreground">Compétences clés</h2>
          </div>
          <div class="space-y-3 text-sm text-muted-foreground">
            <div>
              <p class="text-foreground font-medium mb-1">Langages & frameworks</p>
              <p>{{ cvSkills.languages.join(', ') }}</p>
            </div>
            <div>
              <p class="text-foreground font-medium mb-1">Cloud & data</p>
              <p>{{ cvSkills.cloud.join(', ') }}</p>
            </div>
            <div>
              <p class="text-foreground font-medium mb-1">Outils</p>
              <p>{{ cvSkills.tools.join(', ') }}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-lg bg-muted/60 border border-border">
              <p class="font-semibold text-foreground">Leadership</p>
              <p class="text-muted-foreground mt-1">Coordination d’équipes & rituels tech</p>
            </div>
            <div class="p-3 rounded-lg bg-muted/60 border border-border">
              <p class="font-semibold text-foreground">Qualité</p>
              <p class="text-muted-foreground mt-1">CI/CD, tests auto, documentation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { cvAvatar, cvEducation, cvExperiences, cvProfile, cvSkills } from '~/data/cv';

const avatar = cvAvatar;

const timelineLine = ref<HTMLElement | null>(null);
const expRefs = ref<HTMLElement[]>([]);
const lineHeight = ref(0);
const avatarOffset = ref(0);
const activeIndex = ref(0);

const currentExp = computed(() => cvExperiences[activeIndex.value]);

const setExpRefs = (el: HTMLElement | null) => {
  if (el && !expRefs.value.includes(el)) {
    expRefs.value.push(el);
  }
};

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

const updateLineHeight = () => {
  if (!timelineLine.value) return;
  const rect = timelineLine.value.getBoundingClientRect();
  lineHeight.value = rect.height;
};

const updateScroll = () => {
  if (!timelineLine.value) return;
  const rect = timelineLine.value.getBoundingClientRect();
  const center = window.innerHeight / 2;
  const progress = clamp((center - rect.top) / rect.height, 0, 1);
  avatarOffset.value = progress * rect.height;

  const centers = expRefs.value.map((el) => {
    const elRect = el.getBoundingClientRect();
    return Math.abs(center - (elRect.top + elRect.height / 2));
  });
  const closest = centers.indexOf(Math.min(...centers));
  if (closest >= 0) activeIndex.value = closest;
};

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  updateLineHeight();
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateLineHeight);

  if (timelineLine.value && 'ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      updateLineHeight();
      updateScroll();
    });
    resizeObserver.observe(timelineLine.value);
  }

});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
  window.removeEventListener('resize', updateLineHeight);
  if (resizeObserver && timelineLine.value) resizeObserver.unobserve(timelineLine.value);
});

</script>

