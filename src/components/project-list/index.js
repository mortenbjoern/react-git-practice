import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

//create a class called ProjectList
class ProjectList extends Component {

	//'The constructor method is a special method for creating and initializing an object created within a class.'
	//For more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
	//We pass the props from App.js to the constructor
	constructor(props) {

		//'The super keyword is used to access and call functions on an object's parent.'
		//For more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
	    super(props)

		//Create an object in the constructor that resets the state
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

	  	//resets ProjectList state, see constructor
	  	this.setState(this.initialState)

	  	//reset the input field value
	  	document.getElementById('input').value = '';
	}

	render() {

	//Set properties passed from App to local props
	const { projectData, removeProject, handleSubmit } = this.props

		return (
			<Styled.ProjectsContainer>
				<Styled.Title>Projects</Styled.Title>
				<Styled.Projects projectData={projectData} removeProject={removeProject} />
				<Styled.Row>
					<Styled.Input
						type="text"
						name="name"
						id="input"
						placeholder="Add project..."
						onChange= {this.handleChange}
					 />
					 <Styled.Submit
					 	onClick={this.submitForm}>
						Submit 		
				 	</Styled.Submit>
			 	</Styled.Row>
			</Styled.ProjectsContainer>
		);
	}
}


export default ProjectList;