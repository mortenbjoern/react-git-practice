import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

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
			<Styled.ProjectsContainer>
				<Styled.ProjectsTitle>Projects</Styled.ProjectsTitle>
				<Styled.ProjectsItems>
					<ul>
						<Styled.ProjectsItem />
						<Styled.ProjectsItem />
						<Styled.ProjectsItem />
						<Styled.ProjectsItem />
					</ul>
				</Styled.ProjectsItems>
			</Styled.ProjectsContainer>
		);
  	}
}


export default ProjectList;