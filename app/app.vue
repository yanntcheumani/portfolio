<script lang="ts" setup>
  const toaster = { position: 'top-right' }

</script>

<template>
  <UApp :toaster="toaster">
    <NavBar />

    <NuxtPage/>
    <Footer/>
  </UApp>
</template>
