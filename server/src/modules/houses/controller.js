import service from "./services.js"

class HouseController {
	async createHouse (req, res) {
		try {
			console.log(req.body)
			// const createdHouse = await service.createHouse(req.body)
			// res.status(200).json(createdHouse)
			res.status(200).json('create')
		} catch (e) {
			console.log(e)
			res.status(400).json('house create error', e)
		}
	}

	async getHouses (req, res) {
		try {
			// const _blank = await service.getHouses(req.params)
			const houses = [{name: 'teatralna', pays: [2314324324, 324234234234]}, {name: 'dedushka', pays: [2314324324, 324234234234]}]
			res.status(200).json(houses)
		} catch (e) {
			console.log(e)
			res.status(400).json('house get all error', e)
		}
	}
}

export default new HouseController()
