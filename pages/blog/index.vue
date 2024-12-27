<template>
    <div class="space-y-2">
    <ContentNavigation v-slot="{navigation}">
        <ContentQuery  v-for="link of navigation" :key="link._path" :path="link._path" find="one">
            <template  #default="{data}">
            <UCard  :ui="{footer:{padding:'p-0', base:'text-end'}}">
                <template #header>
                    <div class="grid grid-rows-2">
                        <ULink inactive-class="text-primary" :to="`/blog${link._path}`">{{ data.title }} </ULink>
                        <span class="italic antialiased font-thin font-xs">{{  data.brief  }}</span>
                    </div>
                </template>
                <ContentRendererMarkdown :excerpt="true" :value="data"></ContentRendererMarkdown>
                <ULink inactive-class="text-primary" :to="`/blog${link._path}`">...More </ULink>
                <template #footer>
                    <span>{{ data.date }}</span> 
                    
                </template>
            </UCard>
            </template>
        </ContentQuery>
    </ContentNavigation>
    </div>
</template>

<script setup lang="ts">

const query = await queryContent().sort({"date":-1}).find()
console.log(query)

</script>