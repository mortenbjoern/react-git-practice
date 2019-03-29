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
`

const Title = styled.h2`
	display: block;
	font-size: 32px;
	margin: 0 0 1rem 0;
`

const Row = styled.div`
	display: flex;
	flex-flow: row nowrap;
`

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
`

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
`

const Submit = styled.button`
	background-color: green;
`

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

  		//update var with value of input field
	 	const { name, value } = event.target

	 	/* could be written like so...
	 	const name = event.target.name:
	 	const value = event.target.value;
	 	*/

		//create var with random hex code
	 	const c = '#'+Math.floor(Math.random()*16777215).toString(16);

		//update state input and color 
	  	this.setState({
	    	[name]: value,
	    	color: c,
	    	
	  	})
	}

	submitForm = () => {

		//takes updated props from ProjectList and parses to handleSubmit in App
	  	this.props.handleSubmit(this.state)

	  	//resets ProjectList state
	  	this.setState(this.initialState)

	  	//reset the input field value
	  	document.getElementById('input').value = '';
	}

	render() {

	const { projectData, removeProject, handleSubmit, clearField, generateColor } = this.props

		return (
			<ProjectsContainer>
				<Title>Projects</Title>
				<Projects projectData={projectData} removeProject={removeProject} />
				<Row>
					<Input
						type="text"
						name="name"
						id="input"
						placeholder="Add project..."
						onChange= {this.handleChange}
					 />
					 <Submit
					 	onClick={this.submitForm}>
						Submit 		
				 	</Submit>
			 	</Row>
			</ProjectsContainer>
		);
	}
}


export default ProjectList;