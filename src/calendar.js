import React from 'react'
import styled from 'styled-components';

const CalendarContainer = styled.section`
	border: 1px solid lightgrey;
	border-radius: .5rem;
	height: 900px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
`

const CField = styled.div`
	
`

const CalendarTitle = styled.h2`
	display: block;
	margin: 0;
`

const Calendar = ()  => (
	<CalendarContainer>
	</CalendarContainer>
);

export default Calendar;