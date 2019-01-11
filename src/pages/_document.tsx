import Document, {Main, NextScript} from 'next/document';
import InlineStylesHead from "../components/InlineStylesHead";


export default class CustomDocument extends Document {


	render() {
		const props = this.props.__NEXT_DATA__.props.pageProps;
		const useReact: boolean = !!props.useReact;
		if(useReact) {
			console.log('this pages will use React on client side');
		}
		const lang: string = (props.meta && props.meta.lang) || 'en';

		return (
			<html lang={lang}>
			<InlineStylesHead/>
			<body>
			<Main/>
			{useReact && (<NextScript/>)}
			</body>
			</html>
		)
	}

}
