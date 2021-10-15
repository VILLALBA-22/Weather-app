const types = {
	changeLocation: 'location - change',
	changeUnit: 'unit - change',
}
const initialStore = {
	unitM: 'C',
	currentLocation: null,
	searchLocation: '',
	suggestionSearch: [],
}

const storeReducer = (state, action) => {
	switch (action.type) {
		case types.changeLocation:
			return {
				...state,
				currentLocation: action.payload,
			}
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
