import service from "./services.js"

class ServiceController {
	async create (req, res) {
		try {
			const data = req.body
			const pay = await service.createService(data)
			res.status(200).json(pay)
		} catch (e) {
			console.log(e)
			res.status(400).json('utils get all error', e)
		}
	}

	async addPlan (req, res) {
		try {
			const serviceId = req.params.id
			const data = {data: req.body, serviceId}
			const pay = await service.addPlan(data)
			console.log('controller',pay)
			res.status(200).json(pay)
		} catch (e) {
			console.log(e)
			res.status(400).json('utils get all error', e)
		}
	}

	async getServices (req, res) {
		try {
			// const addressName = req.query.addressName
			const pays = await service.getServices()
			res.status(200).json(pays)
		} catch (e) {
			console.log(e)
			res.status(400).json('pay get all error', e)
		}
	}
}

export default new ServiceController()
