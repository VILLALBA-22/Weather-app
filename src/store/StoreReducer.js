const types = {
	changeLocation: 'location - change',
	changeUnit: 'unit - change',
}

//default location is san fransisco
const initialStore = {
	unitM: 'C',
	currentLocation: {
		consolidated_weather: [
			{
				id: 5228442988576768,
				weather_state_name: 'Clear',
				weather_state_abbr: 'c',
				wind_direction_compass: 'NNW',
				created: '2021-10-15T12:59:16.261374Z',
				applicable_date: '2021-10-15',
				min_temp: 13.344999999999999,
				max_temp: 23.615000000000002,
				the_temp: 21.655,
				wind_speed: 3.430196068639147,
				wind_direction: 331.5,
				air_pressure: 1020.5,
				humidity: 37,
				visibility: 16.06524148970015,
				predictability: 68,
			},
			{
				id: 5077148470607872,
				weather_state_name: 'Clear',
				weather_state_abbr: 'c',
				wind_direction_compass: 'WNW',
				created: '2021-10-15T12:59:19.963210Z',
				applicable_date: '2021-10-16',
				min_temp: 14.385000000000002,
				max_temp: 24.31,
				the_temp: 23.055,
				wind_speed: 3.407342822736552,
				wind_direction: 281.29113131227933,
				air_pressure: 1016.0,
				humidity: 34,
				visibility: 16.995123478883322,
				predictability: 68,
			},
			{
				id: 6462768296230912,
				weather_state_name: 'Light Rain',
				weather_state_abbr: 'lr',
				wind_direction_compass: 'WSW',
				created: '2021-10-15T12:59:22.273295Z',
				applicable_date: '2021-10-17',
				min_temp: 11.485,
				max_temp: 15.629999999999999,
				the_temp: 15.295,
				wind_speed: 6.811344134597949,
				wind_direction: 243.18357638489243,
				air_pressure: 1014.0,
				humidity: 76,
				visibility: 9.058659926031973,
				predictability: 75,
			},
			{
				id: 5757041416077312,
				weather_state_name: 'Light Cloud',
				weather_state_abbr: 'lc',
				wind_direction_compass: 'WNW',
				created: '2021-10-15T12:59:25.264193Z',
				applicable_date: '2021-10-18',
				min_temp: 10.43,
				max_temp: 14.79,
				the_temp: 14.435,
				wind_speed: 5.952695892576686,
				wind_direction: 289.83583908602054,
				air_pressure: 1018.5,
				humidity: 66,
				visibility: 15.395714030064424,
				predictability: 70,
			},
			{
				id: 6102303208636416,
				weather_state_name: 'Light Cloud',
				weather_state_abbr: 'lc',
				wind_direction_compass: 'SW',
				created: '2021-10-15T12:59:28.269012Z',
				applicable_date: '2021-10-19',
				min_temp: 10.225,
				max_temp: 16.275,
				the_temp: 15.52,
				wind_speed: 4.812474804005938,
				wind_direction: 214.12074867470642,
				air_pressure: 1016.5,
				humidity: 59,
				visibility: 13.187671498449058,
				predictability: 70,
			},
			{
				id: 5055393412677632,
				weather_state_name: 'Showers',
				weather_state_abbr: 's',
				wind_direction_compass: 'SE',
				created: '2021-10-15T12:59:31.470124Z',
				applicable_date: '2021-10-20',
				min_temp: 12.0,
				max_temp: 16.585,
				the_temp: 14.96,
				wind_speed: 4.299867175693947,
				wind_direction: 142.50000000000003,
				air_pressure: 1020.0,
				humidity: 66,
				visibility: 9.999726596675416,
				predictability: 73,
			},
		],
		time: '2021-10-15T08:46:54.553947-07:00',
		sun_rise: '2021-10-15T07:18:26.885166-07:00',
		sun_set: '2021-10-15T18:33:03.108632-07:00',
		timezone_name: 'LMT',
		parent: {
			title: 'California',
			location_type: 'Region / State / Province',
			woeid: 2347563,
			latt_long: '37.271881,-119.270233',
		},
		title: 'San Francisco',
		location_type: 'City',
		woeid: 2487956,
		latt_long: '37.777119, -122.41964',
		timezone: 'US/Pacific',
	},
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
				unitM: action.payload,
			}
		default:
			return state
	}
}

export { initialStore, types }
export default storeReducer
