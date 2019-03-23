import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

class Stats extends Component {

	constructor(props) {
		super(props);

		this.initalState = {
			project: '',
			hours: ''
		};

		this.state = this.initalState;
	} 

	render() {
		return (
			<Styled.StatsContainer>
				<Styled.StatsTitle>Stats</Styled.StatsTitle>
				<Styled.StatsItems>
					<ul>
						<li>Test 1</li>
						<li>Test 2</li>
						<li>Test 3</li>
					</ul>
				</Styled.StatsItems>
			</Styled.StatsContainer>
		);
  	}
}

export default Stats;