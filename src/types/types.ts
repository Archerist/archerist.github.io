import crypto from "crypto-js";

type jwt = {
    header: {
        'alg': string | null,
        'typ': 'JWT'
    },

    payload: any | null,

    secret?: string | null
}

type Dict = {
    [id: string]: (x:crypto.lib.WordArray, key:any) => crypto.lib.WordArray | any
}


export type JWTPage = {
    token: jwt,
    algs: Dict,
    headerJSON: string,
    payloadJSON: string,
    secret: string,
    result: string
    error: {
        header: boolean,
        payload: boolean,
        secret: boolean
    }
}