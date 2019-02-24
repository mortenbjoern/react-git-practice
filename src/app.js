import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Calendar from './calendar';
import ProjectsList from './project-list';

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
				<div className="">
					{/* Stats */}
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;