<template>
    <UContainer :ui="{constrained:''}">
        <UHorizontalNavigation :links="mainNav"></UHorizontalNavigation>
        <slot />    
    </UContainer>
</template>
 

<script setup lang="ts">

const mainNav: Ref<any[]> = ref([{
  label: 'Profile',
  icon: 'i-heroicons-user',
  to: '/'
}, {
  label: 'Blog',
  icon: 'i-heroicons-newspaper',
  to: '/blog'
}, {
  label: 'Tools',
  icon: 'i-heroicons-wrench-screwdriver',
  to: '/tools'

},
{
  label: 'Games',
  icon: 'i-heroicons-rocket-launch',
  to: '/games'

}])


</script>