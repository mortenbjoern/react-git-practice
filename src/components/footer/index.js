import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

class Footer extends Component {
	render () {
		return (
		<Styled.FooterContainer>
			<Styled.Text><em>Side project by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mortenbjoern">Morten Bjørn</a>.</em></Styled.Text>
			<Styled.Text>Contribute on <a target="_blank" rel="noopener noreferrer" href="https://github.com">Github</a>.</Styled.Text>
			<Styled.Text>v0.0.3 — 24.02.2019</Styled.Text>
		</Styled.FooterContainer>
		);
	}
}
export default Footer;