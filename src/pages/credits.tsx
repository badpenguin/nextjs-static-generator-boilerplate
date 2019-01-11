import React from 'react';
import Layout from "../components/Layout";
import {NextMetaPageOptions} from "../lib/NextPageMeta";

import '../scss/_style.scss';
import Demo from "../components/Demo";


// NOTE: Dynamic imports does not work with export!
/*const ReactDemo = dynamic({
	loader: () => import('..components/ReactDemo'),
	loading: () => <div className="clock react-loader">You can implement Here a Loader</div>,
	ssr: false
});*/
import ReactDemo from "../components/ReactDemo";


const Page = (props: NextMetaPageOptions) => {
	return (
		<Layout meta={props.meta}>
			<article className="page-empty">
				<Demo title="Credits: Antonio Gallo"/>
				<ReactDemo/>
			</article>
		</Layout>
	)
};

Page.getInitialProps = async (): Promise<NextMetaPageOptions> => {
	return {
		meta: {
			title: 'Credits',
			robots: 'noindex,nofollow,noarchive',
		},
		useReact: true
	}
};

export default Page;
