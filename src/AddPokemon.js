import React, { Component } from 'react';
import styled from 'styled-components'
import { Line } from 'rc-progress';

const Container = styled.div`
	padding: 5px;
	display: flex;
	width: 50%;
`;

const DivData = styled.div`
	padding: 10px;
`;

const DivImage = styled.div`
	
`;

const LineProgress = styled(Line)`
	width: 100% !important;
	height: 30px !important;
`

const TextAdd = styled.p`
	cursor: pointer;
`;

const Search = styled.div`
	height: 45px;
    position: absolute;
    background-color: #fff;
    width: 100%;
`;

const ButtonDiv = styled.div`
	position: absolute;
    background-color: red;
    height: 45px;
    width: 100%;
`

const Main = styled.div`
	    padding-top: 45px;
		height: 690px;
		overflow-y: auto;
`

class AddPokemon extends Component {
	handleAddPokemon = (e , data) => {
		e.preventDefault()
		this.props.handleAdd(data);
	}

	handleSearch = (e) => {
		this.props.handleSearch(e.target.value);
	}

	render() {
		return (
			<div>
				<Search>search <input type="text" onChange={this.handleSearch}/></Search>
				<Main>
					{
						this.props.listPokemon.map((data) => {
							return <Container key={data.id}>
								<DivImage>
									<img src={data.imageUrl} alt="test"/>
								</DivImage>
								<DivData>
									<p>{data.name}</p>
									<div><p>hp</p> <LineProgress percent={data.hp > 100 ? 100 : data.hp} strokeWidth="1" strokeColor="#f0932b"/>
									</div>
									<div><p>str</p> <LineProgress percent={(data.hp * 100) / 200} strokeWidth="1" strokeColor="#f0932b"/>
									</div>
									<div><p>weak</p> <LineProgress percent={(data.hp * 100) / 200} strokeWidth="1" strokeColor="#f0932b"/>
									</div>
									<p>star</p>
									<TextAdd onClick={(e) => this.handleAddPokemon(e , data)}>add</TextAdd>
								</DivData>
							</Container>
						})
					}
				</Main>
				<ButtonDiv>
					<button onClick={() => this.props.changeMode('dex')}>Close</button>
				</ButtonDiv>
			</div>
		);
	}
}

AddPokemon.defaultProps = {};

export default AddPokemon;
