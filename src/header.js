import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	height: 96px;
	justify-content: space-between;
	align-items: center;
`

const HeaderTitle = styled.h1`
	display: block;
	margin: 0;
`

const HeaderNav = styled.nav`
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

const Header = ()  => (
	<HeaderContainer>
		<HeaderTitle>Time management</HeaderTitle>
		<HeaderNav>
			<ul>
				<li><a>Login <span role="img" aria-label="lock-icon">🔓</span></a></li>
				<li><a>Feedback <span role="img" aria-label="speech-bubble">💬</span></a></li>
				<li><a>Donate <span role="img" aria-label="coffee-icon">☕</span></a></li>
			</ul>
		</HeaderNav>
	</HeaderContainer>
);

export default Header;