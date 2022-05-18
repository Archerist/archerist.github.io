<template>

    <h3> JWT Debugger</h3>

    <el-row :gutter="10" justify="end">
        <el-col :span="12">
            <label>Token</label>
            <el-input v-model="result" type="textarea" :rows="20" />
        </el-col>
        <el-col :span="12">
            <label>Header <a v-if="error.header"> ERROR </a></label>
            <el-input v-model="headerJSON" :rows="5" type="textarea" @change="calculateJWT" />
            <label>Payload <a v-if="error.payload"> ERROR </a></label>
            <el-input v-model="payloadJSON" :rows="5" type="textarea" @change="calculateJWT"/>
            <label>Secret <a v-if="error.secret"> ERROR </a></label>
            <el-input v-model="secret" :rows="5" type="textarea" @change="calculateJWT"/>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import crypto from 'crypto-js'
import { JWTPage } from "../types/types";

export default defineComponent({

    name: "JWT",
    data: () => {

        let data: JWTPage = {

            token: {
                header: {
                    typ: "JWT",
                    alg: null
                },

                payload: null,

                secret: null
            },

            algs: {
                'hs256': crypto.HmacSHA256,
                'hs384': crypto.HmacSHA384,
                'hs512': crypto.HmacSHA512,
                // eslint-disable-next-line
                'none': function(x:any){return ''}
            },

            headerJSON: '',
            payloadJSON: '',
            secret: '',

            result: '',

            error: {
                header: false,
                payload: false,
                secret: false
            }


        }

        return data
    },
    methods: {
        calculateJWT: function () {
            try {
                this.error.header = false
                this.token.header = JSON.parse(this.headerJSON)
            } catch (error) {
                if (this.headerJSON !== '') this.error.header = true
            }

            let headerArray = crypto.enc.Utf8.parse(JSON.stringify(this.token.header))
            let base64header = crypto.enc.Base64url.stringify(headerArray)

            try {
                this.error.payload = false
                this.token.payload = JSON.parse(this.payloadJSON)
            } catch (error) {
                if (this.payloadJSON !== '') this.error.payload = true

            }

            //if(this.payload === '' || this.header === '') return


            let payloadArray = crypto.enc.Utf8.parse(JSON.stringify(this.token.payload))
            let base64payload = crypto.enc.Base64url.stringify(payloadArray)
            
            let resultPart1 = base64header + '.' + base64payload

            let wArray = crypto.enc.Utf8.parse(resultPart1)
            let signature = this.algs[this.token.header.alg?.toLowerCase() ?? 'none'](wArray, this.secret).toString()

            this.result = resultPart1 + '.' + signature


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