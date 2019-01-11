import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';


export interface NextMetaPageOptions {
	meta: {
		title: string;
		lang?: string;
		description?: string;
		robots?: string;
		canonical?: string;
		ogimage?: string;
		favicon?: string;
		manifest?: string;
	}
}


const NextMetaPage = (props: NextMetaPageOptions) => {
	//console.log('Layout', props);
	if (!props.meta) {
		console.error('no meta');
	}
	return (
		<React.Fragment>
			<Head>
				<meta charSet="utf-8"/>
				{props.meta.title && <title>{props.meta.title}</title>}
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				{props.meta.description && <meta name="description" content={props.meta.description}/>}
				{props.meta.robots && <meta name="robots" content={props.meta.robots}/>}
				{props.meta.ogimage && <meta property="og:image" content={props.meta.ogimage}/>}
				{props.meta.favicon && <React.Fragment>
					<link rel="shortcut icon" href={props.meta.favicon}/>
					<link rel="apple-touch-icon" href={props.meta.favicon}/>
				</React.Fragment>}
				{props.meta.canonical && <link rel="canonical" href={props.meta.canonical}/>}
				{props.meta.manifest && <link rel="manifest" href={props.meta.manifest}/>}
			</Head>
		</React.Fragment>
	);
};

NextMetaPage.propTypes = {
	meta: PropTypes.object.isRequired
};

export default NextMetaPage;
