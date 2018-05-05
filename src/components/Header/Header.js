import React from 'react';
import './Header.css';
import Navigation from '../Navigation';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  border-top: 1px solid #666;
  background-color: #e2e2e2;
`;

const H3 = styled.h3`
	color: blue;
`
const Container = styled.div`
	color: red;
`
class Header extends React.Component {
	render() {
   	return (
			<Wrapper>
				<Container>
					<H3>Header</H3>
					<Navigation />
					<span>Your Company</span>
		    	</Container>
	  		</Wrapper>
		)
	}
}

export default Header;