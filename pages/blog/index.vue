<template>
    <ContentNavigation v-slot="{navigation}">
        <ul>
            <li v-for="link of navigation" :key="link._path">
                <ULink inactive-class="text-primary" :to="`/blog${link._path}`">{{ link.title }}</ULink>
            </li>
        </ul>

    </ContentNavigation>

</template>

