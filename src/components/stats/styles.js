import styled from 'styled-components';

export const StatsContainer = styled.div`
	min-width: 20rem;
`

export const Title = styled.h2`
	display: block;
	font-size: 24px;
	margin: 0 0 1rem 0;
`

export const Items = styled.div`
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