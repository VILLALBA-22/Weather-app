import React, { useContext } from 'react'
import styled from 'styled-components'
import { types } from '../store/StoreReducer'
import { StoreContext } from '../store/StoreProvider'

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
	cursor: pointer;
	width: 37px;
	padding: 10px;
	background: ${props => (props.unit === 'C' ? '#E7E7EB' : '#585676')};
	color: ${props => (props.unit === 'C' ? '#585676' : '#E7E7EB')};
	border-radius: 88px;
	margin-right: 15px;
	font-weight: bold;
	transition: all 0.3s ease-in-out;
`
const Fahrenheit = styled(Celcius)`
	color: ${props => (props.unit === 'F' ? '#585676' : '#E7E7EB')};
	background: ${props => (props.unit === 'F' ? ' #E7E7EB' : '#585676')};
	margin-right: 0px;
`

const Unit = () => {
	const [store, dispatch] = useContext(StoreContext)
	return (
		<ContainerUnit>
			<Celcius
				unit={store.unitM}
				onClick={() => dispatch({ type: types.changeUnit, payload: 'C' })}
			>
				°C
			</Celcius>
			<Fahrenheit
				unit={store.unitM}
				onClick={() => dispatch({ type: types.changeUnit, payload: 'F' })}
			>
				°F
			</Fahrenheit>
		</ContainerUnit>
	)
}

export default Unit
