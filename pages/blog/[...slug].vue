<template>
  <main>
    <ContentDoc :path="`${$route.path.replace(/\/blog(\/|)/,'/')}`" />
  </main>
</template>
<script setup lang="ts">

</script>