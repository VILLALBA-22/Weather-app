import React from 'react'
import getCurrentLocation from './helpers/getCurrentLocation'
import StoreProvider from './store/StoreProvider'
import Main from './components/Main'
import Details from './components/Details'

import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #1e213a;
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
