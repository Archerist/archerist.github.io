<template>
    <ContentDoc :path="`${$route.path.replace(/\/blog(\/|)/,'/')}`">
      <template #not-found>
        <ULink to="/blog" inactive-class="text-primary">Go back to blog index</ULink>
      </template>

      <template v-slot="{ doc }">
        
        <UCard>
          <template #header> 
            <ULink inactive-class="text-primary" to="/blog"><UIcon name="i-heroicons-arrow-long-left"></UIcon></ULink>
            {{ doc.title }}
          </template>
          <ContentRenderer :value="doc" />

        </UCard>
      </template>
      
    </ContentDoc>
</template>

<script setup lang="ts">

</script>