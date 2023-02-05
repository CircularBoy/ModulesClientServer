import House from "./model.js";

class HouseService {
	async createHouse (house) {
		try {
			const createdHouse = await House.create(house)
			return createdHouse
		} catch (e) {
			console.log(e)
		}
	}

	async getHouses () {
		try {
			const houses = await House.find()
			console.log('get _blank from db', houses)
			return houses
		} catch (e) {
			console.log(e)
		}
	}

	async updateOne (id) {
		try {

		} catch (e) {

		}
	}
}

export default new HouseService()
