import React from 'react'
import styled from 'styled-components'

const ContainerNextDays = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	padding: 30px;
`
const Day = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 120px;
	padding: 18px;
	background: #1e213a;
`
const TitleDay = styled.h3`
	color: #e7e7eb;
	margin-bottom: 10px;
	align-text: center;
`
const ImgDay = styled.img`
	width: 72px;
`
const Tempeture = styled.div`
	display: flex;
	margin-top: 30px;
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
	return (
		<ContainerNextDays>
			<Day>
				<TitleDay>Tomorrow</TitleDay>
				<ImgDay src='./images/Snow.png' />
				<Tempeture>
					<MaxTempeture>16°C</MaxTempeture>
					<MinTempeture>11°C</MinTempeture>
				</Tempeture>
			</Day>
		</ContainerNextDays>
	)
}
