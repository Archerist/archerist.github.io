<template>
    <NuxtLayout :name="'default'">
        <UCard>
            <template #header>
                <UHorizontalNavigation :links="nav"></UHorizontalNavigation>

            </template>
            <slot />
        </UCard>
    </NuxtLayout>
</template>

<script setup lang="ts">

const nav: Ref<any[]> = ref([{
  label: 'Game1',
  to: '/games'
}])

</script>

