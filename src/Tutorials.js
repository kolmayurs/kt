import React from 'react';
import {Tutorial} from './Tutorial'
import {MainContainer,
		Container,
		Content} from './style'
import {Link} from 'react-router-dom'

const render = Tutorial.map((items,i) => {
	return(<React.Fragment>
				<Content>{Number(i+1)+') '}
					<Link to={'tutorial'+Number(i+1)}>{items}</Link>
				</Content>
			</React.Fragment>)
})

const Tutorials = () => (
	<MainContainer>
		<h1>All Tutorials</h1>
		<Container>
			{render}
		</Container>
	</MainContainer>)

export default Tutorials;