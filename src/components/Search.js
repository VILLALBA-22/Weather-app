import React from 'react'
import styled from 'styled-components'

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
	width: 100%;
	display: flex;
	color: #616475;
	padding: 15px;
	border: 1px solid white;
`
const Input = styled.input`
	margin-left: 15px;
	color: white;
	outline: none;
	border: none;
	background: transparent;
`
const ContainerSu = styled.ul`
	margin-top: 45px;
	list-style-type: none;
`
const Suggestion = styled.li`
	border: 1px solid #616475;
	padding: 20px 12px;
	color: #e7e7eb;
	cursor: pointer;
`

const Search = React.forwardRef(({ handleOpenSearch }, ref) => {
	return (
		<ContainerSearch ref={ref}>
			<ContainerX>
				<i
					class='fas fa-times-circle'
					onClick={handleOpenSearch}
					style={{ cursor: 'pointer' }}
				></i>
			</ContainerX>
			<ContainerInput>
				<i class='fas fa-search'></i>
				<Input placeholder='search location' />
			</ContainerInput>
			<ContainerSu>
				<Suggestion>Bogota</Suggestion>
			</ContainerSu>
		</ContainerSearch>
	)
})

export default Search
