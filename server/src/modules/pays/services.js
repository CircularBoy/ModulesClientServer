import Pay from "./model.js";
import House from "../houses/model.js";
import ServiceService from "../utils/services.js";

// const {Pay, houses} = model
class PayService {

	async createPay (payData) {
		try {
			// const preparedData = this.preparePay(payData)
			const createdPay = await Pay.create(payData)

			House.findOne({ name: createdPay.addressName }, (err, TargetHouse) => {
				if(TargetHouse) {
					TargetHouse.pays.push(createdPay._id)
					TargetHouse.save()
				}
			})
			return createdPay
		} catch (e) {
			console.log(e)
		}
	}

	async getPays (options) {
		const {addressName} = options || {}
		const query = {...options.addressName ? {addressName} : {}}

		const pays = await Pay.find(query)
		return pays
	}

	preparePay (payData) {
		const {lastStat, newStat, serviceId, planValue } = payData
		const preparedData = {...payData}
		preparedData.diffStat = newStat - lastStat
		preparedData.createdDate = Date.now()

		//tuc
		// if(isPlanNew) {
		// 	ServiceService.addPlan({serviceId, data: {value: planValue, dateStart: Date.now()}})
		// }

		preparedData.toPay = this.calcToPay(preparedData.diffStat, planValue)

	}

	calcToPay (diffStat, planValue) {

	}


}

export default new PayService()
