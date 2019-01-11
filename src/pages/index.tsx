import React from 'react';
import Layout from "../components/Layout";
import {NextMetaPageOptions} from "../lib/NextPageMeta";


import '../scss/_style.scss';
import Demo from "../components/Demo";


const Page = (props: NextMetaPageOptions) => {
	return (
		<Layout meta={props.meta}>
			<article>
				<Demo title="This is my homepage's title"/>
			</article>
		</Layout>
	)
};


Page.getInitialProps = async (): Promise<NextMetaPageOptions> => {

	return {
		meta: {
			lang: 'en',
			title: 'This is my SEO title',
			description: 'This is my SEO description',
		}
	}
};

export default Page;
