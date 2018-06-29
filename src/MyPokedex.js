import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'
import { Line } from 'rc-progress';

const DivData = styled.div`
	padding: 10px;
`;

const DivImage = styled.div`
	
`;

const Container = styled.div`
	padding: 5px;
	display: flex;
	width: 45%;
`;

const Header = styled.div`
	height: 45px;
    position: absolute;
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size: 26px;
`;

const MainContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 690px;
    padding-top: 45px;
`;

const TextAdd = styled.p`
	cursor: pointer;
`;

const LineProgress = styled(Line)`
	width: 100% !important;
	height: 30px !important;
`

const ButtonDiv = styled.div`
	position: absolute;
    background-color: red;
    height: 45px;
    width: 100%;
`

class MyPokedex extends Component {
	RemovePokemon = (e, data) => {
		e.preventDefault();


		this.props.handleRemove(data);
	}

	render() {
		return (
			<div>
				<Header>My Pokedex</Header>
				<MainContainer>
					{
						this.props.list.length > 0 ?
							this.props.list.map((data) => {
								return <Container key={data.id}>
									<DivImage>
										<img src={data.imageUrl} alt="test"/>
									</DivImage>
									<DivData>
										<p>{data.name}</p>
										<div><p>hp</p> <LineProgress percent={"60"} strokeWidth="10"
										                             strokeColor="#D3D3D3"/>
										</div>
										<p>str</p>
										<p>weak</p>
										<p>star</p>
										<TextAdd onClick={(e) => this.RemovePokemon(e, data)}>remove</TextAdd>
									</DivData>
								</Container>
							})
							: <div>No pokemon in pokedex</div>
					}
				</MainContainer>
				<ButtonDiv>
					<button onClick={() => this.props.changeMode('add')}>add dex</button>
				</ButtonDiv>
			</div>
		);
	}
}

MyPokedex.defaultProps = {};

export default MyPokedex;
