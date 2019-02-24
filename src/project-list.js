import React from 'react'
import styled from 'styled-components';

const ProjectsContainer = styled.div`
	min-width: 20rem;
`

const ProjectsTitle = styled.h2`
	display: block;
	font-size: 24px;
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

const ProjectsList = ()  => (
	<ProjectsContainer>
		<ProjectsTitle>Projects</ProjectsTitle>
		<ProjectsItems>
			<ul>
				<li>Test 1</li>
				<li>Test 2</li>
				<li>Test 3</li>
			</ul>
		</ProjectsItems>
	</ProjectsContainer>
);

export default ProjectsList;