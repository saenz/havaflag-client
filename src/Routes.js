// @flow
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import LoadingIndicator from './components/LoadingIndicator';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
//import Home from 'components/Home/Loadable';
import Login from 'components/Login/Loadable';
import Category from 'modules/category/Loadable';
import Products from 'components/Products/Loadable';


//routes 
import pages from 'pages';
const { NotFound, Admin, Home } = pages;

// const NotFound = Loadable({
//   loader: () => import("pages/NotFound"),
//   loading: LoadingIndicator
// });

// const Admin = Loadable({
//   loader: () => import("pages/Admin"),
//   loading: LoadingIndicator
// });

type Props = {
  childProps : { isAuthenticated:boolean,userHasAuthenticated:() => mixed}
};

export default ({ childProps } : Props) =>
	<Switch>
		<AppliedRoute
      	path="/"
     	 	exact
      	component={Home}
      	props={childProps}
    	/>
		<UnauthenticatedRoute
      		path="/login"
      		exact
      		component={Login}
      		props={childProps}
    	/>
		<Route path="/category" component={Category}/>
		<Route path="/products" component={Products}/>
		<AuthenticatedRoute
      		path="/admin"
      		exact
      		component={Admin}
      		props={childProps}
    	/>
		<Route component={NotFound} />
	</Switch>
;
