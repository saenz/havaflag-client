// @flow
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import LoadingIndicator from './components/LoadingIndicator';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Home from 'components/Home/Loadable';
import Category from 'components/Category/Loadable';
import Products from 'components/Products/Loadable';

// routes

const Login = Loadable({
  loader: () => import("./components/Login"),
  loading: LoadingIndicator
});

const NotFound = Loadable({
  loader: () => import("./components/NotFound"),
  loading: LoadingIndicator
});

const Admin = Loadable({
  loader: () => import("./components/Admin"),
  loading: LoadingIndicator
});

type Props = {
  childProps : { isAuthenticated:boolean,userHasAuthenticated:() => mixed}
}

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
