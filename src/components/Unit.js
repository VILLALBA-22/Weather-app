import React from 'react'
import styled from 'styled-components'

const ContainerUnit = styled.div`
	display: flex;
	padding: 30px;
	max-width: 700px;

	margin: 0 auto;
	justify-content: flex-end;
	@media (min-width: 750px) {
		padding-left: 0px;
	}
`

const Celcius = styled.button`
	border: none;
	width: 37px;
	padding: 10px;
	background-color: #585676;
	border-radius: 88px;
	color: #e7e7eb;
	margin-right: 15px;
	font-weight: bold;
`
const Fahrenheit = styled(Celcius)`
	color: #110e3c;
	background-color: #e7e7eb;
	margin-right: 0px;
`

const Unit = () => {
	return (
		<ContainerUnit>
			<Celcius>°C</Celcius>
			<Fahrenheit>°F</Fahrenheit>
		</ContainerUnit>
	)
}

export default Unit
