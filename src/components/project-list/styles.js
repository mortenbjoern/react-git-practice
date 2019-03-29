import styled from 'styled-components';
import GenerateProjects from './subs.js';

//Styled components
export const ProjectsContainer = styled.div`
	min-width: 20rem;
`

export const Title = styled.h2`
	display: block;
	font-size: 32px;
	margin: 0 0 1rem 0;
`

export const Row = styled.div`
	display: flex;
	flex-flow: row nowrap;
`

export const Projects = styled(GenerateProjects)`
	margin: 0;
	padding: 0;
	position: relative;
	right: 20px;
	& div {
		display: flex;
		flex-direction: row;
		align-items: center;
		& li {
			list-style-type: none;
			text-decoration: none;
			margin: 0 0 .5rem 0;
			padding: 0;
			color: ${props => props.add ? "grey" : "black"};
			margin-top: ${props => props.add ? "1rem" : "inherit"};
		}
		& svg {
			margin: 0 10px .5rem 0;
		}
	}
`

export const Input = styled.input`
	box-sizing: border-box;
	display: block;
	margin-top: 1rem;
	border: 0px;
	font-size: 1rem;
	width: 75%;
	&:focus {
		border-bottom: 1px solid #efefef;
		outline: 0px;
		outline-offset: 0px;
	}
`

export const Submit = styled.button`
	background-color: green;
`