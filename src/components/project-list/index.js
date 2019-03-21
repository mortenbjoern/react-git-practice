import React, {Component} from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
	min-width: 20rem;
`

const ProjectsTitle = styled.h2`
	display: block;
	font-size: 32px;
	margin: 0 0 1rem 0;
`

const ProjectsItems = styled.div`
	display: block;
	& ul {
		margin: 0;
		padding: 0;
		& li {
			list-style-type: none;
			text-decoration: none;
			margin: 0 0 .5rem 0;
			padding: 0;
		}
	}
`

const ProjectsItem = styled.li`
	
`

class ProjectList extends Component {

	constructor(props) {
		super(props);

		this.initalState = {
			project: '',
			hours: ''
		};

		this.state = this.initalState;
	} 

	render() {

		const { projectName } = this.props;

		return (
			<ProjectsContainer>
				<ProjectsTitle>Projects</ProjectsTitle>
				<ProjectsItems>
					<ul>
						<ProjectsItem />
						<ProjectsItem />
						<ProjectsItem />
						<ProjectsItem />
					</ul>
				</ProjectsItems>
			</ProjectsContainer>
		);
  	}
}


export default ProjectList;