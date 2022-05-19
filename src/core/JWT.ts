import crypto, { HmacSHA256 } from "crypto-js"
import {JWTAlgs, JWT} from "@/core/types/JWT"



export const jwtAlgs : JWTAlgs= {
	'hs256': {
		execute:crypto.HmacSHA256,
		validate: () => true
	},
	'hs384': {
		execute:crypto.HmacSHA384,
		validate: () => true
	},
	'hs512': { 
		execute:crypto.HmacSHA512,
		validate: () => true
	},
	// eslint-disable-next-line
	'none': {
		execute: () => crypto.lib.WordArray.create(),
		validate: () => true
	}
}

export function calculateJWT(header:JWT.header, payload: JWT.payload, secret:JWT.secret) : string{

	let headerJSON = JSON.stringify(header)
	let payloadJSON = JSON.stringify(payload)


	let base64header = crypto.enc.Base64url.parse(headerJSON).toString()
	let base64payload= crypto.enc.Base64url.parse(payloadJSON).toString()

	let jwtPart1 = base64header + "." + base64payload
	
	let signature = calculateSignature(header.alg.toLowerCase(), jwtPart1 , secret)

	return jwtPart1 + "." + signature

}


function calculateSignature(type:string, data: string, key:string):string{

	let signature = jwtAlgs[type].execute(data, key)

	

	return signature.toString()
}