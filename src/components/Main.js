import React, { useRef, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { types } from '../store/StoreReducer'
import { StoreContext } from '../store/StoreProvider'
import formatDate from '../helpers/formatDate'
import changeUnit from '../helpers/changeUnit'
import getGeolocation from '../helpers/getGeolocation'
const axios = require('axios').default

const MainDetails = styled.div`
	height: 750px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	padding: 20px 15px;
	position: relative;

	@media (min-width: 1050px) {
		width: 25%;
		padding: 50px 25px;
	}

	.open-display {
		display: block;
	}

	.open {
		opacity: 1;
	}
`
const MainImage = styled.img`
	position: absolute;
	z-index: 1;
	width: 144%;
	margin-top: 40px;
	opacity: 0.1;
`
const SetPosition = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
const SearchBtn = styled.button`
	background-color: #6e707a;
	cursor: pointer;
	color: #e7e7eb;
	padding: 10px;
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: all 0.1s ease-in-out;
	&:active {
		transform: translateY(2px);
	}
`
const FindCurrentLocation = styled(SearchBtn)`
	border-radius: 88px;
	width: 37px;
`
const PrincipalImg = styled.img`
	margin-top: 60px;
	width: 180px;
`
const Tempeture = styled.p`
	margin-top: 18px;
	text-align: center;
	font-size: 144px;
	color: #e7e7eb;
	.unit {
		color: #88869d;
		font-size: 48px;
	}
`
const TempetureName = styled.p`
	margin-top: 15px;
	text-align: center;
	font-size: 30px;
	color: #88869d;
`
const TempetureDate = styled.p`
	margin-top: 32px;
	text-align: center;
	font-size: 15px;
	color: #88869d;
`
const Location = styled.p`
	text-align: center;
	font-size: 15px;
	color: #88869d;
	margin-top: 30px;
`

export default function Main() {
	const openSearch = useRef(null)
	const [isLoadingGeo, setIsLoadingGeo] = useState(false)
	const [store, dispatch] = useContext(StoreContext)

	const getCurrentLocation = () => {
		axios({
			url: 'https://meta-weather.vercel.app/api/location/2487956/',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.data)
			.then(res => dispatch({ type: types.changeLocation, payload: res }))
	}

	useEffect(() => {
		getCurrentLocation()
		getGeolocation(dispatch, types, setIsLoadingGeo)
	}, [])

	const handleOpenSearch = () => {
		if (openSearch.current.classList.contains('open-display')) {
			openSearch.current.classList.toggle('open')
			setTimeout(() => {
				openSearch.current.classList.toggle('open-display')
			}, 300)
		} else {
			setTimeout(() => {
				openSearch.current.classList.toggle('open')
			}, 80)
			openSearch.current.classList.toggle('open-display')
		}
	}
	return (
		<MainDetails>
			<Search ref={openSearch} handleOpenSearch={handleOpenSearch} />
			<MainImage src='images/Cloud-background.png'></MainImage>
			<SetPosition>
				<SearchBtn onClick={handleOpenSearch}>Search for places</SearchBtn>
				<FindCurrentLocation
					onClick={() =>
						console.log(getGeolocation(dispatch, types, setIsLoadingGeo))
					}
				>
					{isLoadingGeo ? (
						<img src='./images/loader.gif' alt='Loader' width='15' />
					) : (
						<i className='fas fa-crosshairs'></i>
					)}
				</FindCurrentLocation>
			</SetPosition>
			<PrincipalImg
				src={`images/${store.currentLocation.consolidated_weather[0].weather_state_name.replace(
					' ',
					''
				)}.png`}
			/>
			<Tempeture>
				{store.unitM === 'F'
					? changeUnit(
							parseInt(store.currentLocation.consolidated_weather[0].the_temp)
					  )
					: parseInt(store.currentLocation.consolidated_weather[0].the_temp)}
				<span className='unit'>°{store.unitM}</span>
			</Tempeture>
			<TempetureName>
				{store.currentLocation.consolidated_weather[0].weather_state_name}
			</TempetureName>
			<TempetureDate>
				Today{' '}
				{formatDate(
					store.currentLocation.consolidated_weather[0].applicable_date
				)}
			</TempetureDate>
			<Location>
				<i className='fas fa-map-marker-alt'></i>{' '}
				{store.currentLocation.parent.title}
			</Location>
		</MainDetails>
	)
}
