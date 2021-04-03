import React from 'react';
import {MainContainer,
		Container} from '../style'



class Tutorial8 extends React.Component{
	constructor(props){
		super(props)
		this.state = {value:''}
		console.log('constructor')
	}
	componentDidMount(){
		console.log('componentDidMount')
		this.setState({value:123})
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	render(){
		console.log('render')
		return (<MainContainer>
		<Container>
			<h1>Tutorial 8</h1>
			{this.state.value}
		</Container>
	</MainContainer>)
	}
}

export default Tutorial8;