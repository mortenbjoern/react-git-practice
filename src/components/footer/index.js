import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

class Footer extends Component {
	render () {
		return (
		<Styled.FooterContainer>
			<Styled.FooterText><em>Side project by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mortenbjoern">Morten Bjørn</a>.</em></Styled.FooterText>
			<Styled.FooterText>Contribute on <a target="_blank" rel="noopener noreferrer" href="https://github.com">Github</a>.</Styled.FooterText>
			<Styled.FooterText>v0.0.3 — 24.02.2019</Styled.FooterText>
		</Styled.FooterContainer>
		);
	}
}
export default Footer;