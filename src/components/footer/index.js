import React, {Component} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	display: flex;
	height: 48px;
	justify-content: space-between;
	align-items: center;
`

const FooterText = styled.p`
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

class Footer extends Component {
	render () {
		return (
		<FooterContainer>
			<FooterText><em>Side project by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mortenbjoern">Morten Bjørn</a>.</em></FooterText>
			<FooterText>Contribute on <a target="_blank" rel="noopener noreferrer" href="https://github.com">Github</a>.</FooterText>
			<FooterText>v0.0.3 — 24.02.2019</FooterText>
		</FooterContainer>
		);
	}
}
export default Footer;