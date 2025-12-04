// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yamanio - Ingénieur fullstack freelance',
      titleTemplate: '%s | Yamanio',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
      meta: [
        {
          name: 'description',
          content:
            "Portfolio de Yamanio, ingénieur fullstack freelance spécialisé en conception et développement d'applications web modernes, performantes et maintenables. Découvrez ses projets, compétences et services en développement back-end et front-end.",
        },
        {
          name: 'keywords',
          content:
            'Yamanio, portfolio, ingénieur fullstack, développeur fullstack, freelance, back-end, front-end, Nuxt, Vue, TypeScript, Node.js, API, SaaS, AWS, Python',
        },
        {
          name: 'author',
          content: 'Yamanio',
        },

        // Open Graph
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: 'Yamanio - Ingénieur fullstack freelance',
        },
        {
          property: 'og:description',
          content:
            "Découvrez le portfolio de Yamanio, ingénieur fullstack freelance : projets, études de cas, compétences techniques et services pour vos applications web complètes, du back-end au front-end. Data analyse et ETL",
        },
        {
          property: 'og:image',
          content: '/logo.png',
        },
        {
          property: 'og:locale',
          content: 'fr_FR',
        },

        // twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Yamanio - Ingénieur fullstack freelance',
        },
        {
          name: 'twitter:description',
          content:
            "Portfolio de Yamanio, ingénieur fullstack freelance spécialisé dans le développement d'applications web robustes, scalables et ergonomiques.",
        },
        {
          name: 'twitter:image',
          content: '/logo.png',
        },
      ],
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['/admin(/*)?'],
      exclude: ["/"],
      saveRedirectToCookie: false,
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/supabase',
  ],
  css: ['./app/assets/css/main.css'],
});