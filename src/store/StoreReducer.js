const types = {
	changeUnit: 'unit - change',
}

const initialStore = {
	unitM: true,
	currentLocation: null,
	searchLocation: null,
	suggestionSearch: [],
}

const storeReducer = (state, action) => {
	switch (action.type) {
		case types.changeUnit:
			return {
				...state,
				unitM: !state.unitM,
			}
		default:
			return state
	}
}

export { initialStore, types }
export default storeReducer
