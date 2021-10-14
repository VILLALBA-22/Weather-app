import React, { useContext } from 'react'
import { types } from '../store/StoreReducer'
import { StoreContext } from '../store/StoreProvider'

function Test() {
	const [store, dispatch] = useContext(StoreContext)
	console.log(store)
	return (
		<div>
			<h1 onClick={() => dispatch({ type: types.changeUnit })}>
				i'm child component
			</h1>
		</div>
	)
}

export default Test
