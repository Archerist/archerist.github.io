<template>
    <ContentDoc :path="`${$route.path.replace(/\/blog(\/|)/,'/')}`">
      <template #not-found>
        <ContentNavigation v-slot="{navigation}">
          <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="`/blog${link._path}`">{{ link.title }}</NuxtLink>
        </li>
      </ul>

        </ContentNavigation>
      </template>

      <template v-slot="{ doc }">
        
        <UCard>
          <template #header>{{ doc.title }}</template>
          <ContentRenderer :value="doc" />

        </UCard>
      </template>
      
    </ContentDoc>
</template>

<script setup lang="ts">

</script>