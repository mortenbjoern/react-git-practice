import React, {Component} from 'react';
import styled from 'styled-components';

//React components
const GenerateProjects = (props) => { 
    const list = props.projectData.map((projects, index) => {
        return (
	        	<li key={index}>{projects.name}<span onClick={() => props.removeProject(index)}> -</span></li>
        );
    });

    return (
    	<ul
    		className={props.className}>
    		{list}
  		</ul>
  	);
};

//Styled components
const ProjectsContainer = styled.div`
	min-width: 20rem;
`;

const Title = styled.h2`
	display: block;
	font-size: 32px;
	margin: 0 0 1rem 0;
`;

const Container = styled.div`
	display: block;
`;

const Projects = styled(GenerateProjects)`
	margin: 0;
	padding: 0;
	& li {
		list-style-type: none;
		text-decoration: none;
		margin: 0 0 .5rem 0;
		padding: 0;
		color: ${props => props.add ? "grey" : "black"};
		margin-top: ${props => props.add ? "1rem" : "inherit"};
	}
`;

const Input = styled.input`
	margin-top: 1rem;
	border: 0px;
	font-size: 1rem;
	padding: 0;
	border-radius: .4rem;
	transition: padding .1s ease-in-out;
	&:focus {
		padding: .5rem;
		transition: padding .1s ease-in-out;
		background-color: #efefef;
		outline: 0px;
		outline-offset: 0px;
	}

`

class ProjectList extends Component {

	render() {

	const { projectData, removeProject, addProject } = this.props

		return (
			<ProjectsContainer>
				<Title>Projects</Title>
				<Projects projectData={projectData} removeProject={removeProject} addProject={addProject} />
				<Input
					type="text"
					name="name"
					placeholder="Add project..."
				 />
			</ProjectsContainer>
		);
	}
}


export default ProjectList;