import Modules from "../modules/index.js"
import Router from "express"

const router = new Router()

Object.values(Modules).forEach((module) => {
	const {routes} = module
	routes.forEach((route) => {
		router[route.method](`${route.path}`, route.func)
	})
})

export default router
