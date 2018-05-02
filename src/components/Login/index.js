// @flow
import React from 'react'
import Auth from 'libs/Auth'
import {Helmet} from 'react-helmet'
import Button from 'material-ui/Button'
import H2 from 'components/H2'

type Props = {
  userHasAuthenticated : Function
};

type State = {
  isLoading: boolean
};

export default class Login extends React.Component<Props, State> {

  state = {
    isLoading: false
  }

  login = (event: SyntheticEvent<HTMLButtonElement>) => {

    this.setState({ isLoading: true });

    try {
      /*await*/ Auth.signIn();
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Jeff Saenz Login page" />
        </Helmet>
        <div>
          <H2>Login</H2>
            <Button variant="raised" color="primary" onClick={this.login}>
              Log in
            </Button>
        </div>
      </article>
    )
  }
}