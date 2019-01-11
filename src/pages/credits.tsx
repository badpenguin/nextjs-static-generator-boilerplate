import React from 'react';
import Layout from "../components/layout";


// Local
import '../scss/_style.scss';
import {NextMetaPageOptions} from "../lib/NextPageMeta";


const Page = (props: NextMetaPageOptions) => {
	//console.log('Page',props);
	return (
		<Layout meta={props.meta}>
			<article className="page-empty">

				<div className="container-fluid">
					<h2>Copyright di terze parti</h2>

					<p>Immagini utilizzate da Wikimedia Commons (https://creativecommons.org/licenses/by/4.0):</p>

					<ul>
						<li>Angular: Google [CC BY 4.0 ()],</li>
						<li>ReactJS [CC BY-SA 4.0]</li>
						<li>Ionic Maxlynch [CC BY-SA 4.0]</li>
					</ul>

					<h2>Notes</h2>

					<p>Questo sito è HTML statico ed è stato realizzato con <b>NextJS in React</b> e <a
						href="https://github.com/badpenguin/vanilla-css/">Vanilla CSS</a>.</p>

				</div>

			</article>

		</Layout>
	)
};

Page.getInitialProps = async (): Promise<NextMetaPageOptions> => {
	return {
		meta: {
			title: 'Credits',
			lang: 'it',
			robots: 'noindex,nofollow,noarchive',
		}
	}
};

export default Page;
