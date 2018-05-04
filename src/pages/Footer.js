import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
`;

const Footer = () => (
  <Wrapper>
    <h2>Footer</h2>
  </Wrapper>
)

export default Footer;