import React from 'react'
import styled from 'styled-components';

const StatsContainer = styled.div`
	min-width: 20rem;
`

const StatsTitle = styled.h2`
	display: block;
	font-size: 24px;
	margin: 0 0 1rem 0;
`

const StatsItems = styled.div`
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

const Stats = ()  => (
	<StatsContainer>
		<StatsTitle>Stats</StatsTitle>
		<StatsItems>
			<ul>
				<li>Test 1</li>
				<li>Test 2</li>
				<li>Test 3</li>
			</ul>
		</StatsItems>
	</StatsContainer>
);

export default Stats;