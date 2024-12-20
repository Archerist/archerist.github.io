<template>
    <ContentDoc :path="`${$route.path.replace(/\/blog(\/|)/,'/')}`">
      <template #not-found>
        
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