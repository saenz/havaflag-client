// @flow
import React from 'react'
import { Link, Route } from 'react-router-dom'
import type {Match} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import H2 from 'components/H2'

const Category = ({ match } : Match) => {
	return ( 
		<article> 
		    <Helmet>
        		<title>Category</title>
          		<meta name="description" content="Jeff Saenz home page" />
      		</Helmet>
			<div>
				<H2>Category</H2>
				<ul>
		    		<li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
		    		<li><Link to={`${match.url}/boots`}>Boots</Link></li>
	    			<li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
	  			</ul>
	  		</div>
	  		<Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
	  	</article>
  	)
}
export default Category