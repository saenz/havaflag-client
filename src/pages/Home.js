import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  	<article>
    	<Helmet>
        	<title>Home Page</title>
          	<meta name="description" content="Jeff Saenz home page" />
      </Helmet>
    	<div>
    		<h2>Home</h2>
    		This is the text of the home page.
    	</div>
  	</article>
)

export default Home;