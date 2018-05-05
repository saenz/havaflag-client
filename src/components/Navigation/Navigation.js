import React from 'react';
import { Link } from "react-router-dom";
import s from './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
		<div role="navigation">
			<Link className={s.link} to="/">
			  Home
			</Link>
			<span className={s.spacer}> | </span>
			<Link className={s.link} to="/category">
			  Category
			</Link>
			<span className={s.spacer}> | </span>
			<Link className={s.link} to="/admin">
			  Admin
			</Link>
			<span className={s.spacer}> | </span>
			<Link className={s.link} to="/products">
			  Products
			</Link>
			<span className={s.spacer}> | </span>
			<Link className={s.link} to="/xxx">
			  Not Found
			</Link>
			<span className={s.spacer}> | </span>
			<Link className={s.link} to="/login">
			  Log in
			</Link>
      </div>
    );
  }
}

export default Navigation;
