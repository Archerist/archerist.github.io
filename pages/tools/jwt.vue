<template>
    <div class="grid grid-cols-7">
        <div class="col-span-3"> JWT Token</div>
        <div class="col-span-1"></div>
        <div class="col-span-3">Header - Payload - Secret</div>
    </div>
    <div class="grid grid-cols-7">

        <UTextarea color="gray"  v-model="token" placeholder="JWT Token" variant="outline" :ui="{ base: 'h-full' }"
            class="col-span-3"></UTextarea>
        <UDivider size="2xs" :ui="{ container: { vertical: 'mx-1' } }" orientation="vertical"></UDivider>
        <div class="grid grid-rows-3 col-span-3 gap-y-2">

            <UTextarea :ui="{ base: 'h-full' }" color="gray"  v-model="header" placeholder="Header JSON" variant="outline"
                class="row-span-1"></UTextarea>
            <UTextarea :ui="{ base: 'h-full' }"  color="gray"  v-model="payload" placeholder="Payload JSON" variant="outline"
                class="row-span-1"></UTextarea>
            <UInput v-model="secret" placeholder="Secret" color="gray" variant="outline" class="row-span-1">
            </UInput>

        </div>

    </div>

</template>


<script setup lang="ts">
definePageMeta({
    alias: "/tools",
    layout: "tools"
})

let jwtInfo = ref({
    decoded: {
        header: {
            "alg": "HS256",
            "typ": "JWT"
        },
        payload: {
            "sub": "1234567890",
            "name": "John Doe",
            "iat": 1516239022
        },
        secret: "S E C R E T"
    },
})


let token = ref("")



onBeforeMount(async () => {
    token.value = await calculateJWT()
})


const header = computed({
    get() {
        return JSON.stringify(jwtInfo.value.decoded.header)
    },
    set(val) {
        try {
            jwtInfo.value.decoded.header = JSON.parse(val)
            calculateJWT().then(_t =>{
                token.value = _t
            }).catch(ex => console.error(ex))

        } catch (err){
            console.error(err)
        }
    }
})

const payload = computed({
    get() {
        return JSON.stringify(jwtInfo.value.decoded.payload)
    },
    set(val) {
        try {
            jwtInfo.value.decoded.payload = JSON.parse(val)
            calculateJWT().then(_t =>{
                token.value = _t
            }).catch(ex => console.error(ex))

        } catch (err){
            console.error(err)

        }
    }
})

const secret = computed({
    get() {
        return jwtInfo.value.decoded.secret
    },
    set(val) {
        try {
            jwtInfo.value.decoded.secret = val
            calculateJWT().then(_t =>{
                token.value = _t
            }).catch(ex => console.error(ex))

        } catch (err){
            console.error(err)

        }
    }
})



async function calculateJWT() {
    console.log("start")
    let enc = new TextEncoder()
    console.log(enc.encode(jwtInfo.value.decoded.secret))
    let key = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(jwtInfo.value.decoded.secret),
        { name: "HMAC", hash: { name: "SHA-256" } },
        false, ["sign"])
    let sign = await window.crypto.subtle.sign("HMAC", key, enc.encode(header.value + "." + payload.value))
    return btoa(header.value) + "." + btoa(payload.value) + "." + btoa(String.fromCharCode(...new Uint8Array(sign)));

}




</script>