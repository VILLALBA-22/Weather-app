import React from 'react'
import styled from 'styled-components'
import Unit from './Unit'
import InfoNextDays from './InfoNextDays'
import InfoCurrentDay from './InfoCurrentDay'

const ContainerDetails = styled.div`
	background-color: #100e1d;
	padding: 20px;
	@media (min-width: 730px) {
		padding-right: 0px;
	}
	@media (min-width: 1050px) {
		width: 75%;
	}
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
