<template>
    <section id="services" className="py-24 bg-white">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl mb-4 font-bold text-gray-950">Mes Services</h2>
          <p class="text-xl text-neutral-700 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </div>
        
        <div  class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <UCard v-for="(service, index) in services" :key="index" class="border-2 bg-white hover:border-primary-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <template #header class="border-0">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                        <UIcon :name="service.icon" class="w-7 h-7 text-accent-600 group-hover:text-neutral-700" />
                    </div>
                    <span class="text-xl text-dark-300">{{service.title}}</span>
                </template>

                  <span class="text-neutral-700">
                    {{ service.description }}
                  </span>  
            </UCard>

          <!-- {services.map((service, index) => (
            <UCard 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <template #header>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
            </template>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </UCard>
          ))} -->
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

const services = [
  {
    icon: "i-lucide-earth",
    title: "Applications Web",
    description: "Développement d'applications web sur mesure, performantes et évolutives avec les dernières technologies React, Node.js et plus encore.",
  },
  {
    icon: "i-lucide-phone",
    title: "Applications Mobile",
    description: "Création d'applications mobiles natives et cross-platform pour iOS et Android, offrant une expérience utilisateur exceptionnelle.",
  },
  {
    icon: "i-lucide-database",
    title: "Data Analyse",
    description: "Exploitation de vos données pour en extraire des insights précieux et prendre des décisions éclairées grâce à des analyses approfondies.",
  },
  {
    icon: "i-lucide-workflow",
    title: "ETL & Intégration",
    description: "Solutions ETL personnalisées pour l'extraction, la transformation et le chargement de données entre vos différents systèmes.",
  },
];

</script>