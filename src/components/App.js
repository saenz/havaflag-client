// @flow
//
// todo: 
//  - auth - see https://github.com/AnomalyInnovations/serverless-stack-demo-client/blob/code-splitting-in-create-react-app/src/App.js
//
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Auth from '../libs/Auth'
import Routes from './Routes';

type Props = {
  match: {},
  location: {},
  history: { push : (string) => void }
};

type State = {
  isAuthenticated: boolean,
  isAuthenticating: boolean
};

class App extends Component<Props,State> {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  /*async*/ componentDidMount() {
    try {
      if (/*await*/ Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
 
  handleLogout = /*async*/ event => {
    event.preventDefault();

    /*await*/ Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
        <Routes childProps={childProps} />
    );
  }
}

export default withRouter(App);
