// @flow
//
// todo: 
//  - auth - see https://github.com/AnomalyInnovations/serverless-stack-demo-client/blob/code-splitting-in-create-react-app/src/App.js
//
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Helmet from 'react-helmet';
import Auth from './libs/Auth'
import Header from 'components/Header';
import Footer from 'pages/Footer';
import styled from 'styled-components';
import Routes from './Routes';

//import logo from './logo.svg';
//import './App.css';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

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
      !this.state.isAuthenticating &&
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Saenz"
          defaultTitle="default title"
        >
          <meta name="description" content="app.js description" />
        </Helmet>
        <Header />
        <nav className="test navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            { this.state.isAuthenticated 
                ? <li><a href="/" onClick={this.handleLogout}>Logout</a></li>
                : <li><Link to="/login">Login</Link></li>
            }
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <Routes childProps={childProps} />
        <Footer />
      </AppWrapper>
    );
  }
}

export default withRouter(App);
