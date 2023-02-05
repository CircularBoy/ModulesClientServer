import controller from "./controller.js"

const routes = [
	{
		method: 'post',
		path: '/_blank/create',
		func: controller.createHouse
	},
	{
		method: 'get',
		path: '/_blank',
		func: controller.getHouses
	},
]

export default routes
