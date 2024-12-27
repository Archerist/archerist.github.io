<template>
    <div class="grid grid-cols-2">
        <UFormGroup v-for="(value, key) in options" :label="(key as string)">
            <UInput :disabled="true" v-model="chosen[key]"></UInput>
        </UFormGroup>
        <UButton @click="randomize">Randomize</UButton>
    </div>
    <div></div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "tools"
})

const options :{[key:string]:string[]} ={
    dimension: ["2D","3D", "Text Based"],
    genre: ["Shooter","Platformer","Roguelike"],
    multiplayer: ["Single Player", "PvP", "Co-op"],
    artstyle: ["Pixel Art", "Photorealistic", "Low Poly", "Cartoon", "Anime"],
    ostgenre: ["Dubstep", "Classic", "Synthwave"],
    difficulty: ["Casual", "Normal","Hard","Souls-like"],
    camview: ["Isometric", "Sidescrolling", "Top Down", "FPS", "TPS"],
    setting: ["Mythic", "Medieval", "Modern", "Cyberpunk", "Steampunk", "Fantasy"]
}

const chosen :Ref<{[key:string]:string}> = ref({
    dimension:"",
    genre:"",
    multiplayer:"",
    artstyle:"",
    ostgenre:"",
    difficulty:"",
    camview:"",
    setting:"",
})

function randomize() {
    for(const k of Object.keys(options)){
        chosen.value[k] = options[k][Math.floor(Math.random() * options[k].length)]
    }
}

</script>