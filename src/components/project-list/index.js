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
				<Styled.Title>Projects</Styled.Title>
				<Styled.List>
					<ul>
						<Styled.Item>Personal</Styled.Item>
						<Styled.Item>Research</Styled.Item>
						<Styled.Item add>Add new...</Styled.Item>
						<Styled.Item></Styled.Item>
					</ul>
				</Styled.List>
			</Styled.ProjectsContainer>
		);
  	}
}


export default ProjectList;