import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styled from './styles.js';

class Header extends Component {
	render() {
		return(
			<Styled.HeaderContainer>
				<Styled.HeaderTitle>Time management</Styled.HeaderTitle>
				<Styled.HeaderNav>
					<ul>
						<li><a>Login <span role="img" aria-label="lock-icon">🔓</span></a></li>
						<li><a>Feedback <span role="img" aria-label="speech-bubble">💬</span></a></li>
						<li><a>Donate <span role="img" aria-label="coffee-icon">☕</span></a></li>
					</ul>
				</Styled.HeaderNav>
			</Styled.HeaderContainer>
		);
	}
}

export default Header;