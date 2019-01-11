import React from 'react';
import PropTypes from 'prop-types';


// Local
import Footer from "./footer";
import GoogleMetaData from "./metadata";
import FabsMenu from "./fabs";
import NextMetaPage, {NextMetaPageOptions} from "../lib/NextPageMeta";
import NextGoogleFont from "../lib/NextGoogleFont";
import NextGoogleAnalytics from "../lib/NextGoogleAnalytics";


interface LayoutOptions extends NextMetaPageOptions {
	children?: any;
}

const Layout = (props: LayoutOptions) => {
	//console.log('Layout', props);
	if (!props.meta) {
		console.error('no meta');
	}
	return (
		<React.Fragment>
			<NextMetaPage meta={{
				...props.meta,
				ogimage: '/static/img/antoniogallo.it.jpg',
				favicon: '/static/favicon.png',
				manifest: '/static/app/manifest.json'
			}}/>
			{props.children}
			<Footer/>
			<FabsMenu/>
			<NextGoogleFont face="Fjalla+One|Open+Sans:400,500,700"/>
			<NextGoogleAnalytics id='UA-10428680-2'/>
			<GoogleMetaData/>
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	meta: PropTypes.object.isRequired
};

export default Layout;
