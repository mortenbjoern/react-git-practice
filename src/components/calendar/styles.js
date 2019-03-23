import styled from 'styled-components';

export const CalendarContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
`

export const CalendarRow = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	width: 18%;
	margin-right: 1%;
	&:last-of-type {
		margin-right: 0;
	}
`

export const CField = styled.div`
	display: block;
	border: 1px solid lightgrey;
	border-radius: .2rem;
	height: 36px;
	margin-bottom: .2rem;
`

export const CalendarTitle = styled.h2`
	display: block;
	margin: 0;
`