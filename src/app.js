import React, {Component} from 'react';
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Calendar from './components/calendar/index.js';
import ProjectsList from './components/project-list/index.js';
import Stats from './components/stats/index.js';

class App extends Component {

	render() {

		const projects = [
		  {
		    name: 'Reports'
		  },
		  {
		    name: 'Website',
		  },
		  {
		    name: 'App',
		  },
		  {
		    name: 'Add news..',
		  },
		];

		//eslint-disable-next-line
		{/* const { characters } = this.state; */}

		return (
			<div className="full-container">
				<div className="margin-bottom-large">
					<Header className=""/>
				</div>
				<div className="flex-row margin-bottom-large">
					<div className="flex-small flex-shrink">
						<ProjectsList projectData={projects} />
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