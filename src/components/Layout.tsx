import React from 'react';
import PropTypes from 'prop-types';
import NextMetaPage, {NextMetaPageOptions} from "../lib/NextPageMeta";
import NextGoogleFont from "../lib/NextGoogleFont";


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
//				favicon: '/static/favicon.png',
//				manifest: '/static/manifest.json'
			}}/>
			{props.children}
			<NextGoogleFont face="Fjalla+One|Open+Sans:400,500,700"/>
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	meta: PropTypes.object.isRequired
};

export default Layout;
