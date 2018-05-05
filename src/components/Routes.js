// @flow
import React from 'react';
import { Route, Switch } from "react-router-dom";

import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import Login from 'routes/login/Login/Loadable';
import Home from 'routes/home/Home/Loadable';
import Category from 'routes/category/Category/Loadable';
import Admin from 'routes/admin/Admin/Loadable';
import NotFound from 'routes/not-found/NotFound/Loadable';
import Products from 'routes/products/Products/Loadable';

// const NotFound = Loadable({
//   loader: () => import("pages/NotFound"),
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
