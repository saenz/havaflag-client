// @flow
import React from 'react'
import { Link, Route } from 'react-router-dom'
import type {Match} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout';

const Category = ({ match } : Match) => {
	return ( 
		<Layout>
		    <Helmet>
        		<title>Category</title>
          		<meta name="description" content="Jeff Saenz home page" />
      		</Helmet>
			<div>
				<h2>Category</h2>
				<ul>
		    		<li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
		    		<li><Link to={`${match.url}/boots`}>Boots</Link></li>
	    			<li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
	  			</ul>
	  		</div>
	  		<Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
	  	</Layout>
  	)
}
export default Category