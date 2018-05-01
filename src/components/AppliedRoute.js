// @flow
import * as React from "react";
import { Route } from "react-router-dom";

type Props = {
	component: any,
	props: {isAuthenticated:boolean,userHasAuthenticated:() => mixed},
	//rest: Array<any> //{path:string,exact:boolean}
}

export default ({ component: C, props: cProps, ...rest } : Props) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;

// path="/"
//  	exact
// 	component={Home}
// 	props={childProps}