import React from 'react'
import styled from 'styled-components';

const CalendarContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
`

const CalendarRow = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	width: 18%;
	margin-right: 2%;
`

const CField = styled.div`
	display: block;
	border: 1px solid lightgrey;
	border-radius: .2rem;
	height: 36px;
	margin-bottom: .2rem;
`

const CalendarTitle = styled.h2`
	display: block;
	margin: 0;
`

const Calendar = i => (
	<CalendarContainer>
		<CalendarRow>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
		</CalendarRow>
		<CalendarRow>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
		</CalendarRow>
		<CalendarRow>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
		</CalendarRow>
		<CalendarRow>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
		</CalendarRow>
		<CalendarRow>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
			<CField></CField>
		</CalendarRow>
	</CalendarContainer>
);

export default Calendar;