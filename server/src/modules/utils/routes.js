import controller from "./controller.js";

const routes = [
	{
		method: 'post',
		path: '/utils/create',
		func: controller.create
	},
	{
		method: 'post',
		path: '/utils/:id/addPlan',
		func: controller.addPlan
	},
	// {
	// 	method: 'get',
	// 	path: '/utils',
	// 	func: controller.getPays
	// },
]
export default routes
