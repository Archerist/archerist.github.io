<template>
    <ContentDoc :path="`${$route.path.replace(/\/blog(\/|)/,'/')}`">
      <template #not-found>
        <ULink to="/blog" inactive-class="text-primary">Go back to blog index</ULink>
      </template>

      <template v-slot="{ doc }">
        
        <UCard >
          <template #header> 
            <div class="flex flex-row items-center justify-between">
              <UButton  to="/blog" icon="i-heroicons-arrow-long-left">Back</UButton>
              <p class="text-4xl">{{ doc.title }}</p>
              <div></div>
            </div>
            </template>
          <ContentRenderer class="prose dark:prose-invert lg:prose-xl" :value="doc" />

        </UCard>
      </template>
      
    </ContentDoc>
</template>

<script setup lang="ts">

</script>