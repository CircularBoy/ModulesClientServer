import modules from "../modules"

const reducers = {}

Object.values(modules).forEach((module) => {
	if(module?.reducer && typeof module.reducer === 'object') {
		const moduleReducer = module.reducer

		reducers[moduleReducer.stateName] = moduleReducer.reducer
	}
})

export default reducers
