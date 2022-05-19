<template>

    <h3> JWT Debugger</h3>

    <el-row :gutter="10" justify="end">
        <el-col :span="12">
            <label>jwt</label>
            <el-input v-model="inputs.result" type="textarea" :rows="20" />
        </el-col>
        <el-col :span="12">
            <label>Header</label>
            <el-input v-model="inputs.headerJSON" placeholder="JSON" :rows="5" type="textarea" @change="updateHeader" />
            <label>Payload </label>
            <el-input v-model="inputs.payloadJSON" placeholder="JSON" :rows="5" type="textarea" @change="null"/>
            <label>Secret </label>
            <el-input v-model="inputs.secret" :rows="5" type="textarea" @change="null"/>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="24">
            <a v-if="error.header" ref="headerError"> ERROR </a>
            <a v-if="error.payload"> ERROR </a>
            <a v-if="error.secret"> ERROR </a>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JWTPage } from "@/core/types/JWT";
//import { calculateJWT } from "@/core/JWT";

export default defineComponent({

    name: "JWT",
    data: () => {

        let data: JWTPage = {

            jwt: {
                header: {
                    typ: "JWT",
                    alg: "None"
                },

                payload: null
            },

            inputs: {

                headerJSON: '',
                payloadJSON: '',
                secret: '',

                token: '',
            },

            error: {
                header: false,
                payload: false,
                secret: false
            }


        }

        return data
    },
    methods: {
        updateHeader: function () {
            try {
                this.error.header = false
                let _h = JSON.parse(this.inputs.headerJSON)
                if (_h.typ === undefined || _h.alg === undefined) throw new Error('"alg" and "type" keys missing')
            } catch (error) {
                this.error.header = true
                let errElement = this.$refs.headerError as HTMLAnchorElement
                console.log(errElement)
                errElement.textContent = error as string
            }
        },
        updatePayload: function () {

            try {
                this.error.header = false
                this.jwt.header = JSON.parse(this.inputs.headerJSON)
            } catch (error) {
                this.error.header = true
            }
        }
    }


})


</script>

<style scoped>
h3 {
    text-align: center;
}

a {
    color: rgb(255, 0, 0);
    font-weight: bold;
}
</style>