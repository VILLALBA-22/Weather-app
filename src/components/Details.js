import React from 'react'
import styled from 'styled-components'
import Unit from './Unit'
import InfoNextDays from './InfoNextDays'
import InfoCurrentDay from './InfoCurrentDay'

const ContainerDetails = styled.div`
	background-color: #100e1d;
	padding: 20px;
`

const Details = () => {
	return (
		<ContainerDetails>
			<Unit />
			<InfoNextDays />
			<InfoCurrentDay />
		</ContainerDetails>
	)
}

export default Details
