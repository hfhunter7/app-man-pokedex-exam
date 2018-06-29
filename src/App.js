import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import MyPokedex from './MyPokedex';
import AddPokemon from './AddPokemon';

// const COLORS = {
// 	Psychic: "#f8a5c2",
// 	Fighting: "#f0932b",
// 	Fairy: "#c44569",
// 	Normal: "#f6e58d",
// 	Grass: "#badc58",
// 	Metal: "#95afc0",
// 	Water: "#3dc1d3",
// 	Lightning: "#f9ca24",
// 	Darkness: "#574b90",
// 	Colorless: "#FFF",
// 	Fire: "#eb4d4b"
// }

const Main = styled.div`
	height: 768px;
	
`;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			pokedex: [],
			mode: 'dex'
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/api/cards').then(res => res.json()
		).then((json) => {
				this.setState({
					items: json.cards,
				})
			}
		);
	}

	handleAdd = (data) => {
		const pokedexData = this.state.items.filter(item => item.id !== data.id)

		this.setState({
			pokedex: this.state.pokedex.concat([data]),
			items: pokedexData
		})
	}

	handleRemove = (data) => {
		const dataRemove = this.state.pokedex.filter((item) => item.id !== data.id)

		this.setState({
			pokedex: dataRemove,
			items: this.state.items.concat([data])
		})
	}

	changeMode = (mode) => {
		this.setState({
			mode: mode
		})
	}

	handleSearch = (text) => {
		const data = this.state.items.filter((item) => item.name.indexOf(text) !== -1)

		this.setState({
			items: data
		})
	}

	render() {
		return (
			<Main>
				{
					this.state.mode === 'dex' ? <MyPokedex list={this.state.pokedex} changeMode={this.changeMode} handleRemove={this.handleRemove}/>
						: <AddPokemon listPokemon={this.state.items} changeMode={this.changeMode} handleAdd={this.handleAdd} handleSearch={this.handleSearch}/>
				}
			</Main>
		)
	}
}

export default App
