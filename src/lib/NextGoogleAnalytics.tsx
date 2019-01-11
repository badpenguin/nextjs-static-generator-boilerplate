import React from 'react';
//import PropTypes from 'prop-types';
import Head from 'next/head';


export interface NextGoogleAnalyticsOptions {
	id: string;
	anonymize?: boolean;
}


const NextGoogleAnalytics = (props: NextGoogleAnalyticsOptions) => {
	let anonymize= props.anonymize ? props.anonymize : true;
	return (
		<React.Fragment>
			<Head>
				<link rel='preconnect' href='https://www.google-analytics.com/'/>
			</Head>
			<script dangerouslySetInnerHTML={{__html:`
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create',' ${props.id}', 'auto');
	ga('set', 'anonymizeIp', ${anonymize} );
	ga('send', 'pageview');
			`}}/>
		</React.Fragment>
	);
};

export default NextGoogleAnalytics;
