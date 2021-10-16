import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../store/StoreProvider'
import formatDate from '../helpers/formatDate'
import changeUnit from '../helpers/changeUnit'

const ContainerNextDays = styled.div`
	display: flex;
	max-width: 700px;
	margin: 0 auto;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px 10px 30px 30px;
	@media (min-width: 750px) {
		padding-left: 0px;
		justify-content: flex-start;
	}
`
const Day = styled.div`
	display: flex;
	margin: 0px 18px 20px 0px;
	flex-direction: column;
	align-items: center;
	width: 120px;
	padding: 18px;
	height: 190px;
	background: #1e213a;
	justify-content: space-between;
`
const TitleDay = styled.h3`
	color: #e7e7eb;
	margin-bottom: 10px;
	font-weight: 500;
	font-size: 14px;
	align-text: center;
`
const ImgDay = styled.img`
	width: 72px;
	margin-bottom: 15px;
`
const Tempeture = styled.div`
	display: flex;
	margin-top: 5px;
	width: 100%;
	justify-content: space-between;
`
const MaxTempeture = styled.span`
	color: #e7e7eb;
	font-size: 16px;
`
const MinTempeture = styled(MaxTempeture)`
	color: #a09fb1;
`

export default function InfoNextDays() {
	const [store, dispatch] = useContext(StoreContext)

	return (
		<ContainerNextDays>
			{store.currentLocation.consolidated_weather.map((day, index) => {
				if (index === 0) {
					return null
				}
				let weatherState = day.weather_state_name.replace(' ', '')

				return (
					<Day key={day.id}>
						<TitleDay>
							{index === 1
								? 'Tomorrow'
								: formatDate(
										store.currentLocation.consolidated_weather[index]
											.applicable_date
								  )}
						</TitleDay>
						<ImgDay src={`./images/${weatherState}.png`} />
						<Tempeture>
							<MaxTempeture>
								{store.unitM === 'F'
									? changeUnit(parseInt(day.max_temp))
									: parseInt(day.max_temp)}
								°{store.unitM}
							</MaxTempeture>
							<MinTempeture>
								{store.unitM === 'F'
									? changeUnit(parseInt(day.min_temp))
									: parseInt(day.min_temp)}
								°{store.unitM}
							</MinTempeture>
						</Tempeture>
					</Day>
				)
			})}
		</ContainerNextDays>
	)
}
