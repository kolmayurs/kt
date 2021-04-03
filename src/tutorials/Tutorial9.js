import React,{useState,useEffect} from 'react';
import {MainContainer,
		Container} from '../style'



const Tutorial9 = () => {
	const [value, setValue] = useState('')
	useEffect(() => {
		setValue('123')

		return ()=>{
			
		}
	},[value])
	return(<MainContainer>
		<h1>All Tutorials</h1>
		<Container>
			<h1>Tutorial 9</h1>
			{value}
		</Container>
	</MainContainer>)
}
	
	

export default Tutorial9;