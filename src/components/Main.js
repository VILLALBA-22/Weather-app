import React from 'react'
import styled from 'styled-components'

const MainDetails = styled.div`
	height: 750px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	padding: 20px 15px;
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
	color: #e7e7eb;
	padding: 10px;
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
	return (
		<MainDetails>
			<MainImage src='images/Cloud-background.png'></MainImage>
			<SetPosition>
				<SearchBtn>Search for places</SearchBtn>
				<FindCurrentLocation>
					<i className='fas fa-crosshairs'></i>
				</FindCurrentLocation>
			</SetPosition>
			<PrincipalImg src={'images/LightRain.png'} />
			<Tempeture>
				15
				<span className='unit'>°C</span>
			</Tempeture>
			<TempetureName>Shower</TempetureName>
			<TempetureDate>Today | Fri, 5 jun</TempetureDate>
			<Location>
				<i class='fas fa-map-marker-alt'></i> Bogota
			</Location>
		</MainDetails>
	)
}

// #1E213A
