import Util from "./model.js";

class UtilsService {
	async createService (data) {
		try {
			console.log(data)
			const createdService = await Util.create(data)
			// return createdService
		} catch (e) {
			console.log(e)
		}
	}

	async getServices () {
		try {
			const utils = await Util.find()
			return utils
		} catch (e) {
			console.log(e)
		}
	}

	async addPlan (payload) {
		const {serviceId, data} = payload
		try {
			const services = await Util.findById(serviceId, async (err, UtilItem) => {
				if(UtilItem) {
					UtilItem.plans.push(data)
					return await UtilItem.save()
				}
			})
			return {error: 'error'}
		} catch (e) {
			console.log('error add plan service', e)
		}
	}
}

export default new UtilsService()
