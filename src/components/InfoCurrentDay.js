import React from 'react'
import styled from 'styled-components'

const ContainerInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 50px;
`

const Title = styled.h3`
	color: #e7e7eb;
	font-weight: 700;
	font-size: 24px;
	margin-bottom: 30px;
`

const ItemInfo = styled.div`
	background: #1e213a;
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
`

const HumidityContainer = styled.div`
	margin: auto;
	width: 80%;
	margin-top: 10px;
`

const HumidityPercent = styled.div`
	display: flex;
	justify-content: space-between;
`
const HumidityProgress = styled.div`
	width: 100%;
	height: 10px;
	border-radius: 12px;
	overflow: hidden;
	background: grey;
	margin-top: 3px;
`
const HumidityProgressNumber = styled.div`
	width: 70%;
	height: 10px;
	background: yellow;
`
const HumidityProgressPercent = styled.div`
	margin-top: 3px;

	display: flex;
	justify-content: flex-end;
`

export default function InfoCurrentDay() {
	return (
		<ContainerInfo>
			<Title>Today’s Hightlights</Title>
			<ItemInfo>
				<h3 className='title'>Wind status</h3>
				<p className='number'>
					7<span className='unit'>mph</span>
				</p>
				<p className='compass'>
					<i class='far fa-compass'></i> WSW
				</p>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Humidity</h3>
				<p className='number'>
					84<span className='unit'>%</span>
				</p>
				<HumidityContainer>
					<HumidityPercent>
						<span>0%</span>
						<span>50%</span>
						<span>100%</span>
					</HumidityPercent>
					<HumidityProgress>
						<HumidityProgressNumber />
					</HumidityProgress>
					<HumidityProgressPercent>%</HumidityProgressPercent>
				</HumidityContainer>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Visibility</h3>
				<p className='number'>
					6,4<span className='unit'>miles</span>
				</p>
			</ItemInfo>
			<ItemInfo>
				<h3 className='title'>Air Pressure</h3>
				<p className='number'>
					998<span className='unit'>md</span>
				</p>
			</ItemInfo>
		</ContainerInfo>
	)
}
