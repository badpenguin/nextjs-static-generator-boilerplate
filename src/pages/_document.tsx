import React from 'react';
import Document, {Main, NextScript} from 'next/document';
import NextHeadWithInlineCss from "../lib/NextHeadWithInlineCss";


export default class CustomDocument extends Document {

	render() {
		const props = this.props.__NEXT_DATA__.props.pageProps;
		const useReact: boolean = !!props.useReact;
		if (useReact) {
			console.warn('===> this pages will use React on client side');
		}
		const lang: string = (props.meta && props.meta.lang) || 'en';

		return (
			<html lang={lang}>
			<NextHeadWithInlineCss/>
			<body>
			<Main/>
			{useReact && <NextScript/>}
			</body>
			</html>
		)
	}

}
