import React, {useEffect} from 'react';
import {MainContainer,
		Container} from '../style'
import axios from 'axios'

/* npm install axios */

const Tutorial13 = () => {
	useEffect(()=>{
		jokes()
	},[])

const jokes = async () =>{
	try{
			const res = await axios.get('https://api.icndb.com/jokes/random')
			if(res.status === 200){
				console.log(res.data)
			}
		}
		catch(err){
			console.log(err)
		}
	
}
	return (
	<MainContainer>
		<Container>
			<h1>Tutorial 13</h1>
		</Container>
	</MainContainer>)}

export default Tutorial13;