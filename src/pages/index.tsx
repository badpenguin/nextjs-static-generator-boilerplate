import React from 'react';
import Layout from "../components/layout";

// Local
import '../scss/_style.scss';

import HomePageHero from "../blocks/homePageHero";
import HomePageAboutMe from "../blocks/homePageAboutMe";
import HomePageCorsoTitolo from "../blocks/homePageCorsoTitolo";
import HomePageCorsoIonicBootcamp from "../blocks/HomePageCorsoIonicBootcamp";
import HomePageCorsoIonicPWA from "../blocks/HomePageCorsoIonicPWA";
import HomePageCorsoReactNative from "../blocks/HomePageCorsoReactNative";
import HomePageSkill from "../blocks/homePageSkill";
import HomePageSocial from "../blocks/homePageSocial";
import HomePageSpeaker from "../blocks/homePageSpeaker";
import {NextMetaPageOptions} from "../lib/NextPageMeta";


//import dynamic from 'next/dynamic';
//import Test from "./components/test";
/*const Test = dynamic(() => import('./components/test'), {
	ssr: false
});*/

/*const Test = dynamic({
  loader: () => import('./components/test'),
  loading: () => <p>Loading caused by client page transition ...</p>,
	ssr: false
});*/


const Page = (props: NextMetaPageOptions) => {
	return (
		<Layout meta={props.meta}>
			<article>
				<HomePageHero/>

				<HomePageAboutMe/>

				<HomePageCorsoTitolo/>
				<HomePageCorsoIonicBootcamp/>
				<HomePageCorsoIonicPWA/>
				<HomePageCorsoReactNative/>

				<HomePageSkill/>
			</article>

			<aside>
				<HomePageSpeaker/>
				<HomePageSocial/>
			</aside>

		</Layout>
	)
};


Page.getInitialProps = async (): Promise<NextMetaPageOptions> => {

	return {
		meta: {
			lang: 'it',
			canonical: 'https://antoniogallo.it/',
			title: 'Antonio Gallo: Corsi Ionic, Sviluppo Mobile e Full Stack Developer',
			description: 'Sono Antonio Gallo è mi occupo di corsi Ionic, corsi di Sviluppo Mobile e Full Stack Developer.',
		}
	}
};

export default Page;
