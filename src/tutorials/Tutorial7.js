import React from 'react';
import {MainContainer,
		Container} from '../style'



const Tutorial7 = () => {
	const x = [1,2,3,'Mukesh'];
	const y= [{
			'name': 'orange',
			'color': 'orange'
		},
		{
			'name': 'pineapple',
			'color': 'yellow'
		}]

	const render = x.map((i)=>{
		return(<h2 key={'array_'+i}>{i}</h2>)
	})

	const render1 = y.map((items,i)=>{
		return(<React.Fragment key={'array_'+i}>
			<div>{items.name}</div>
			<div>{items.color}</div>
		</React.Fragment>)
	})
	return (<MainContainer>
		<Container>
			<h1>Tutorial 7</h1>
			{render}
			{render1}
		</Container>
	</MainContainer>)}

export default Tutorial7;