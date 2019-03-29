import React, {Component} from 'react';
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Calendar from './components/calendar/index.js';
import ProjectsList from './components/project-list/index.js';
import Stats from './components/stats/index.js';

class App extends Component {

	state = {
		projects: []
	};

	removeProject = index => {
	  const { projects } = this.state;

	  this.setState({
		    projects: projects.filter((project, i) => {
		      return i !== index
		    }),
		  })
	}

	handleSubmit = project => {
	  	this.setState({ projects: [...this.state.projects, project] })
	}

	render() {

		const { projects } = this.state

		return (
			<div className="full-container">
				<div className="margin-bottom-large">
					<Header className=""/>
				</div>
				<div className="flex-row margin-bottom-large">
					<div className="flex-small flex-shrink">
						<ProjectsList projectData={projects} handleSubmit={this.handleSubmit} removeProject={this.removeProject} generateColor={this.generateColor} />
					</div>
					<div className="flex-small">
						<Calendar />
					</div>
				</div>
				<div className="margin-bottom-large">
					<Stats />
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;