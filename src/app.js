import React, {Component} from 'react';
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Calendar from './components/calendar/index.js';
import ProjectsList from './components/project-list/index.js';
import Stats from './components/stats/index.js';

class App extends Component {

	state = {
		characters: []
	};

	removeCharacter = index => {
		const { characters } = this.state;

		this.setState ({
			characters: characters.filter((characters,i) => {
				return i !== index;
			})
		});
	}

	handleSubmit = character => {
		this.setState({characters: [...this.state.characters, character]});
	}

	render() {

		const projects = [
		  {
		    name: 'Reports',
		  },
		  {
		    name: 'Website',
		  },
		  {
		    name: 'App',
		  },
		  {
		    name: 'Coordinator',
		  },
		]

		//eslint-disable-next-line
		{/* const { characters } = this.state; */}

		return (
			<div className="full-container">
				<div className="margin-bottom-large">
					<Header className=""/>
				</div>
				<div className="flex-row margin-bottom-large">
					<div className="flex-small flex-shrink">
						<ProjectsList />
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