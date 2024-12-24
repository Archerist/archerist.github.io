<template>
    <ContentNavigation v-slot="{navigation}">
        <div v-for="link of navigation" :key="link._path">

        <UCard>
            <template #header>
                <div class="grid grid-rows-2">
                    <ULink inactive-class="text-primary" :to="`/blog${link._path}`">{{ link.title }} </ULink>
                    {{  link.brief  }}
                </div>
            </template>
        </UCard>
        </div>
    </ContentNavigation>

</template>

<script setup lang="ts">

const query = queryContent().sort({"date":-1})

</script>