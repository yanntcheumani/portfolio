<template>
    <footer class="bg-secondary-600 text-primary-foreground py-12">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center gap-6">
          <img src="/logo.png" alt="YAMANIO" className="h-16 w-16" width="64" height="64"/>
          <p class="text-center text-primary-500">
            © {{new Date().getFullYear()}} YAMANIO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
</template>