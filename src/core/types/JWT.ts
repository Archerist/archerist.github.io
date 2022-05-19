import crypto from "crypto-js";



export namespace JWT {

    export type header = {
        'alg': string ,
        'typ': 'JWT'
    }

    export type payload = any | null

    export type secret = string
}

export type JWT  = {
    header: JWT.header,
    payload: JWT.payload
}


export type JWTAlgs = {
    [id: string]: {
        execute: (...args:any) => crypto.lib.WordArray
        validate: (...args:any) => boolean
    }
}



export type JWTPage = {
    jwt: JWT,
    inputs: {

        headerJSON: string,
        payloadJSON: string,
        secret: string,
        token: string,
    }
    error: {
        header: boolean,
        payload: boolean,
        secret: boolean
    }
}