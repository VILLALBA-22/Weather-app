const axios = require('axios').default
let url = 'https://meta-weather.vercel.app/api/location/search/?lattlong='
let ulfForWoeid = 'https://meta-weather.vercel.app/api/location/'

export default function getGeolocation(dispatch, types, setIsLoadingGeo) {
	let options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}

	function success(pos) {
		let crd = pos.coords
		setIsLoadingGeo(true)
		axios(`${url}${crd.latitude},${crd.longitude}`)
			.then(res => res.data)
			.then(res => axios(`${ulfForWoeid}${res[0].woeid}`))
			.then(res => dispatch({ type: types.changeLocation, payload: res.data }))
			.then(() => setIsLoadingGeo(false))
			.catch(() => setIsLoadingGeo(false))
	}
	function error(err) {
		setIsLoadingGeo(false)
		if (err.message === 'User denied Geolocation') {
			window.alert('To find your current location you must active geolocation')
		}
	}

	navigator.geolocation.getCurrentPosition(success, error, options)
}
