import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

//import normalizeCss from 'normalize.css';
import './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

const Content = styled.div`
  flex: 1;
`

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className='layout'>
        <Helmet
          titleTemplate="%s - Saenz"
          defaultTitle="default title"
        >
          <meta name="description" content="app.js description" />
        </Helmet>
        <Header/>
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Layout;

