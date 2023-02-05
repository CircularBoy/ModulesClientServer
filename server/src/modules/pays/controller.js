import service from "./services.js"

class PayController {
	async create (req, res) {
		try {
			const data = req?.body

			const pay = await service.createPay(data)
			res.status(200).json(pay)
		} catch (e) {
			console.log(e)
			res.status(400).json('pay get all error', e)
		}
	}

	async getPays (req, res) {
		try {
			const addressName = req.query.addressName
			const pays = await service.getPays({addressName})
			res.status(200).json(pays)
		} catch (e) {
			console.log(e)
			res.status(400).json('pay get all error', e)
		}
	}
}

export default new PayController()
