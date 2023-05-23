import controller from "./controller.js"

const routes = [
	{
		method: 'post',
		path: '/houses/create',
		func: controller.createHouse
	},
	{
		method: 'get',
		path: '/houses',
		func: controller.getHouses
	},
]

export default routes
