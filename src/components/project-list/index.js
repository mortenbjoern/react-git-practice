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
`;

const Submit = styled.button`

`;

class ProjectList extends Component {

	constructor(props) {
	    super(props)

	    this.initialState = {
	      	name: '',
	      	color: '',
	    }

		this.state = this.initialState
  	}

  	handleChange = event => {
	 	const { name, value } = event.target

	  	this.setState({
	    	[name]: value,
	  	})
	}

	submitForm = () => {
	  	this.props.handleSubmit(this.state)
	  	this.setState(this.initialState)
	}

	clearField = e => {
		e.value = '';
	}

	render() {

	const { projectData, removeProject, handleSubmit } = this.props

		return (
			<ProjectsContainer>
				<Title>Projects</Title>
				<Projects projectData={projectData} removeProject={removeProject} />
				<Input
					type="text"
					name="name"
					placeholder="Add project..."
					clearField={this.clearField}
					onChange={this.handleChange}
				 />
				 <Submit
				 	onClick={this.submitForm}>
					Submit 		
			 	</Submit>
			</ProjectsContainer>
		);
	}
}


export default ProjectList;