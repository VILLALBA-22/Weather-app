import React, { useState, useContext } from 'react'
import { types } from '../store/StoreReducer'
import { StoreContext } from '../store/StoreProvider'

import styled from 'styled-components'
const axios = require('axios').default

const ContainerSearch = styled.div`
	position: absolute;
	rigth: 0px;
	opacity: 0;
	transition: all 0.3s ease;
	background: #1e213a;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
	height: 500px;
	display: none;
	z-index: 100;
	padding: 20px;
	padding-top: 0px;
`
const ContainerX = styled.div`
	width: 100%;
	margin-bottom: 30px;
	display: flex;
	justify-content: flex-end;
	color: white;
	font-size: 28px;
`

const ContainerInput = styled.div`
	width: 60%;
	overflow: hidden;

	display: flex;
	color: #616475;
	padding: 15px;
	border: 1px solid white;
`
const Input = styled.input`
	padding: 0 18px;
	width: 100%;

	color: white;
	outline: none;
	border: none;
	background: transparent;
`

const InputSubmit = styled(Input)`
	margin-left: 15px;
	width: 35%;
	cursor: pointer;
	background: #3c47e9;
	color: #e7e7eb;
`

const ContainerSu = styled.ul`
	margin-top: 45px;
	list-style-type: none;
`
const Suggestion = styled.li`
	padding: 20px 12px;
	display: flex;
	justify-content: space-between;
	color: #e7e7eb;
	cursor: pointer;
	margin-bottom: 6px;
	outline: 1px solid transparent;
	transition: all 0.2s ease-in-out;
	&:hover {
		outline: 1px solid #616475;
	}
`

const Form = styled.form`
	display: flex;
	width: 100%;
`

const initialSuggestions = [
	{ title: 'London', woeid: 44418 },
	{ title: 'Barcelona', woeid: 753692 },
	{ title: 'Bogotá', woeid: 368148 },
]

const Search = React.forwardRef(({ handleOpenSearch }, ref) => {
	const [store, dispatch] = useContext(StoreContext)
	const [textToSearch, setTextToSearch] = useState('')
	const [suggestions, setSuggestions] = useState(initialSuggestions)
	let flagOneClick = true
	const handleSearch = e => {
		setTextToSearch(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		axios({
			url: `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${textToSearch}`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => setSuggestions(res.data.slice(0, 5)))
			.catch(err => console.log(err.toJSON()))
	}
	const getCurrentLocation = (e, woeid) => {
		flagOneClick = false
		let loader = document.createElement('img')
		loader.src = './images/loader.gif'
		loader.width = '19'
		e.target.appendChild(loader)
		axios({
			url: `https://meta-weather.vercel.app/api/location/${woeid}`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.data)
			.then(res => dispatch({ type: types.changeLocation, payload: res }))
			.then(() => {
				handleOpenSearch()
				setTextToSearch('')
				loader.remove()
				flagOneClick = true
			})
			.catch(err => (flagOneClick = true))
	}

	return (
		<ContainerSearch ref={ref}>
			<ContainerX>
				<i
					className='fas fa-times-circle'
					onClick={handleOpenSearch}
					style={{ cursor: 'pointer' }}
				></i>
			</ContainerX>
			<Form onSubmit={handleSubmit}>
				<ContainerInput>
					<i className='fas fa-search'></i>
					<Input
						placeholder='search location'
						value={textToSearch}
						onChange={handleSearch}
						type='text'
						onKeyPress={e => {
							if (e.key === 'Enter') {
								handleSubmit(e)
							}
						}}
					/>
				</ContainerInput>
				<InputSubmit type='submit' value='Search' />
			</Form>

			<ContainerSu>
				{suggestions.length === 0 ? (
					<p style={{ color: 'white' }}>Not found</p>
				) : null}
				{suggestions.map(sug => (
					<Suggestion
						key={sug.woeid}
						onClick={e => {
							if (flagOneClick) {
								getCurrentLocation(e, sug.woeid)
							}
						}}
					>
						{sug.title}
					</Suggestion>
				))}
			</ContainerSu>
		</ContainerSearch>
	)
})

export default Search
