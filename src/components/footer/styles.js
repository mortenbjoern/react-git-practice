import styled from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	height: 48px;
	justify-content: space-between;
	align-items: center;
`

export const FooterText = styled.p`
	display: block;
	margin: 0;
	padding: 0;
	color: grey;
	font-size: .9rem;
	& a {
		color: inherit;
		&:hover {
			cursor: pointer;
			color: inherit;
		}
	}
	& em {
		text-decoration: cursive;
	}
`