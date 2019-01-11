import {Head} from "next/document"
import {readFileSync} from "fs"
import {join} from "path"
import React from "react";

const exportDir = 'dist'; // I don't use "out"

export default class InlineStylesHead extends Head {

	getCssLinks() {

		const {assetPrefix, files} = this.context._documentProps;
		if (!files || files.length === 0) return null;

		// Return parent version if DEV/HMR mode
		if(this.context._documentProps.dev) {
			// @ts-ignore
			return super.getCssLinks();
		}

		// Inline CSS
		return files.filter((file: any) => /\.css$/.test(file)).map((file: any) => (
			<style
				key={file}
				nonce={this.props.nonce}
				data-href={`${assetPrefix}/_next/${file}`}
				dangerouslySetInnerHTML={{
					__html: readFileSync(join(process.cwd(), exportDir, '_next', file), "utf-8")
				}}
			/>

		))
	}

	// Disable preload stuffs
	getPreloadDynamicChunks() {
		return null;
	}

	getPreloadMainLinks() {
		return null;
	}


	render() {

		const {
			head,
			styles,
		} = this.context._documentProps;


		let children = this.props.children;
		// show a warning if Head contains <title> (only in development)
		if (process.env.NODE_ENV !== "production") {
			children = React.Children.map(children, (child:any) => {
				if (child && child.type === "title") {
					console.warn(
						"Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title"
					);
				}
				return child;
			});
		}

		return (
			<head {...this.props}>
				{head}
				{this.getCssLinks()}
				{styles || null}
				{children}
			</head>
		);
	}


}

/* ORI
 render () {
    const { head, styles, assetPrefix, __NEXT_DATA__ } = this.context._documentProps
    const { page, buildId } = __NEXT_DATA__
    const pagePathname = getPagePathname(page)

    let children = this.props.children
    // show a warning if Head contains <title> (only in development)
    if (process.env.NODE_ENV !== 'production') {
      children = React.Children.map(children, (child) => {
        if (child && child.type === 'title') {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title")
        }
        return child
      })
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated')
    }

    return <head {...this.props}>
      {children}
      {head}
      {page !== '/_error' && <link rel='preload' href={`${assetPrefix}/_next/static/${buildId}/pages${pagePathname}`} as='script' nonce={this.props.nonce} crossOrigin={this.props.crossOrigin || process.crossOrigin} />}
      <link rel='preload' href={`${assetPrefix}/_next/static/${buildId}/pages/_app.js`} as='script' nonce={this.props.nonce} crossOrigin={this.props.crossOrigin || process.crossOrigin} />
      <link rel='preload' href={`${assetPrefix}/_next/static/${buildId}/pages/_error.js`} as='script' nonce={this.props.nonce} crossOrigin={this.props.crossOrigin || process.crossOrigin} />
      {this.getPreloadDynamicChunks()}
      {this.getPreloadMainLinks()}
      {this.getCssLinks()}
      {styles || null}
    </head>
  }

 */
