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

class Header extends React.Component {
	render() {
   	return (
			<Wrapper>
				<div className="container">
					<h3>Header</h3>
					<Navigation />
					<span>Your Company</span>
		    	</div>
	  		</Wrapper>
		)
	}
}

export default Header;