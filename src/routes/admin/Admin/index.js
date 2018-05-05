import React from "react";
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet'

//const Admin = () => (
export default () =>
	<Layout>
		<Helmet>
			<title>Admin</title>
			<meta name="description" content="Jeff Saenz admin page" />
		</Helmet>
		<div>
    		<h2>Admin</h2>
  		</div>
  	</Layout>;