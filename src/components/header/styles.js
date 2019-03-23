import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	height: 96px;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.h1`
	display: block;
	margin: 0;
`

export const Nav = styled.nav`
	display: block;
	& ul {
		margin: 0;
		padding: 0;
		& li {
			display: inline-block;
			text-decoration: none;
			margin: 0 2rem 0 0;
			padding: 0;
			&:last-of-type {
				margin: 0;
			}
			& a {
			color: inherit;
			&:hover {
				cursor: pointer;
				color: inherit;
			}	
		}
	}
`