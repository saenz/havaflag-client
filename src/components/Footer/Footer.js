import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import s from './Footer.css';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
  background-color: #e2e2e2;
`;

const Footer = () => (
	<Wrapper>
		<div>
			<span className={s.text}>© Your Company</span>
			<span className={s.spacer}>·</span>
			<Link className={s.link} to="/">
			 Home
			</Link>
			<span className={s.spacer}>·</span>
			<Link className={s.link} to="/admin">
			 Admin
			</Link>
			<span className={s.spacer}>·</span>
			<Link className={s.link} to="/privacy">
			 Privacy
			</Link>
			<span className={s.spacer}>·</span>
			<Link className={s.link} to="/not-found">
			 Not Found
			</Link>
  		</div>
  	</Wrapper>
)

export default Footer;