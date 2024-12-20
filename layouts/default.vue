<template>
    <UHorizontalNavigation :links="mainNav"></UHorizontalNavigation>
    <slot/>
</template>


<script setup lang="ts">

const mainNav: Ref<any[]> = ref([{

}])


</script>