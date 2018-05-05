// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import style from './Home.css'

// type Props = {
//   isLoading:boolean,
//   error: string,
//   timedOut: boolean
// };

const Home = () => (
	<Layout>
		<div className={style.Home}>
			<div>
				<Helmet>
					<title>Home Page</title>
					<meta name="description" content="Jeff Saenz home page" />
				</Helmet>
				<div>
					<h2>Home</h2>
					This is the text of the home page.
				</div>
			</div>
		</div>
	</Layout>
)

export default Home;