import styled from 'styled-components';

export const CalendarContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
`

export const Row = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	width: 18%;
	margin-right: 1%;
	&:last-of-type {
		margin-right: 0;
	}
`

export const Cell = styled.div`
	display: block;
	border: 1px solid lightgrey;
	border-radius: .2rem;
	height: 36px;
	margin-bottom: .2rem;
`