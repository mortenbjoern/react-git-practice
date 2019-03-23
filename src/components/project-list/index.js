import React, {Component} from 'react';
import styled from 'styled-components';

//React components
const Unordered = props => { 
    const list = props.projectData.map((projects, index) => {
        return (
        	<div>
	          <li key={index}>{projects.name}</li>
	          <button onClick={() => props.removeProject(index)}>Delete</button>
          </div>
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

const UnorderedList = styled(Unordered)`
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

class ProjectList extends Component {

	render() {

	const { projectData, removeProject } = this.props

		return (
			<ProjectsContainer>
				<Title>Projects</Title>
				<Container>
					<UnorderedList projectData={projectData} removeProject={removeProject} />
				</Container>
			</ProjectsContainer>
		);
	}
}


export default ProjectList;