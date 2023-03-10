import {apiConfig} from "../config/api";
import houses from "./houses/houses.api"

const request = async (path, method, data) => {

	const options = {
		method: method,
		headers: {
			'content-type': 'application/json'
		},
		...data ? {body: JSON.stringify(data)} : {},
	}

	console.log(options)
	try {
		const response = await fetch(`${apiConfig.baseUrl}/${path}`, options)
		const data = await response.json();
		// console.log({data})
		return data
	} catch (e) {
		console.log('response', e)
	}
}

export const api = {
	get: (path) => request(path, 'GET'),
	post: (path, data) => request(path, 'POST', data)
	// get: async (path, method = 'GET', data = {}) => {
	//
	// 	const options = {
	// 		method: method,
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		}
	// 	}
	//
	// 	try {
	// 		const response = await fetch(`${apiConfig.baseUrl}/${path}`, options)
	// 		const data = await response.json();
	// 		console.log({data})
	// 		return data
	// 	} catch (e) {
	// 		console.log('response', e)
	// 	}
	// },
	// post: async (path, method = 'POST', data = {}) => {
	//
	// 	const options = {
	// 		method: method,
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		}
	// 	}
	//
	// 	try {
	// 		const response = await fetch(`${apiConfig.baseUrl}/${path}`, options)
	// 		const data = await response.json();
	// 		console.log({data})
	// 		return data
	// 	} catch (e) {
	// 		console.log('response', e)
	// 	}
	// },
}


export default {
	...houses
}
