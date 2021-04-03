import styled from 'styled-components';

export const MainContainer = styled.div`
	width:100%;
	height:auto;
	margin:0px;
	padding: 0px;
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Container = styled.div`
	width: 50%;
	background: #ffffff;
	border-radius: 4px;
	min-height: 90vh;
	margin: 20px;
	padding:50px;	
`
export const Content = styled.div`
	font-weight: bold;
	padding: 10px;
`

export const Mukesh = styled.div`
	width:${props => props.width};
	height:100px;
	border-radius:50%;
	background: ${props => props.warning?'red':'green'};
	border:2px solid green;

`