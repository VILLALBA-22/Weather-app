import React, {useContext ,useLayoutEffect} from 'react';
import getCurrentLocation from './helpers/getCurrentLocation'
import StoreProvider from './store/StoreProvider'
import Main from './components/Main'
import Details from './components/Details'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #1e213a;
	@media (min-width: 1050px) {
		flex-direction: row;
	}
`

function App() {
	
	getCurrentLocation()
	return (
		<StoreProvider>
			<Container>
				<Main />
				<Details />
			</Container>
		</StoreProvider>
	)
}

export default App
