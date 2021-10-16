import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../store/StoreProvider'

const ContainerInfo = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 50px;
	max-width: 700px;
	margin: 0 auto;
	@media (min-width: 750px) {
		padding-left: 0px;
		justify-content: flex-start;
	}
`

const Title = styled.h3`
	color: #e7e7eb;
	font-weight: 700;
	font-size: 24px;
	margin-bottom: 30px;
	width: 100%;
`

const ItemInfo = styled.div`
	background: #1e213a;
	max-width: 328px;
	margin-bottom: 30px;
	display: flex;
	padding: 20px;
	width: 100%;
	flex-direction: column;
	align-items: center;
	.title {
		color: #e7e7eb;
		font-size: 16px;
		font-weight: 500;
	}
	.number {
		margin-top: 10px;
		color: #e7e7eb;
		font-size: 50px;
		font-weight: 500;
		font-weight: bold;
	}
	.unit {
		color: #88869d;
		font-size: 28px;
		font-weight: bold;
	}
	.compass {
		margin-top: 20px;
		color: #e7e7eb;
		font-size: 14px;
		font-weight: 500;
	}
	@media (min-width: 658px) {
		margin-right: 20px;
	}
`

const HumidityContainer = styled.div`
	margin: auto;
	width: 80%;
	margin-top: 10px;
`

const HumidityPercent = styled.div`
	display: flex;
	justify-content: space-between;
	color: #a09fb1;
`
const HumidityProgress = styled.div`
	width: 100%;
	height: 10px;
	border-radius: 12px;
	overflow: hidden;
	background: #e7e7eb;
	margin-top: 3px;
`
const HumidityProgressNumber = styled.div`
	width: ${props => props.percent}%;
	height: 10px;
	background: #ffec65;
`
const HumidityProgressPercent = styled.div`
	margin-top: 3px;
	color: #a09fb1;

	display: flex;
	justify-content: flex-end;
`

export default function InfoCurrentDay() {
	const [store, dispatch] = useContext(StoreContext)
	let currentDay = store.currentLocation.consolidated_weather[0]
	return (
		<ContainerInfo>
			<Title>Today’s Hightlights</Title>
			<ItemInfo>
				<h3 className='title'>Wind status</h3>
				<p className='number'>
					{parseInt(currentDay.wind_speed)}
					<span className='unit'>mph</span>
				</p>
				<p className='compass'>
					<i className='far fa-compass' style={{ marginRight: '5px' }}></i>
					{currentDay.wind_direction_compass}
				</p>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Humidity</h3>
				<p className='number'>
					{currentDay.humidity}
					<span className='unit'>%</span>
				</p>
				<HumidityContainer>
					<HumidityPercent>
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</HumidityPercent>
					<HumidityProgress>
						<HumidityProgressNumber percent={currentDay.humidity} />
					</HumidityProgress>
					<HumidityProgressPercent>%</HumidityProgressPercent>
				</HumidityContainer>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Visibility</h3>
				<p className='number'>
					{currentDay.visibility.toFixed(1)}
					<span className='unit'>miles</span>
				</p>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Air Pressure</h3>
				<p className='number'>
					{parseInt(currentDay.air_pressure)}

					<span className='unit'>md</span>
				</p>
			</ItemInfo>
		</ContainerInfo>
	)
}
