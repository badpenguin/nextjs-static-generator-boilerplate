# nextjs-static-generator-boilerplate
A **Next.JS** boilerplate to build and **export a static website without requiring a running server**. Basically you can use Next.Js as a **static generator** removing unwanted features like extra JS files.

Currently used on https://antoniogallo.it/

For tecnically details and why i created this, please read my article on:
* https://medium.com/@antoniogallo.it/creating-an-optimized-big-static-page-website-with-next-js-dc53e5d7f941
* https://www.linkedin.com/pulse/creating-optimized-big-static-page-nextjs-antonio-gallo/

In the provided skeleton there are 2 test pages: index and credits.

The index page does not have any react components on client side, so it will not load any extra Javascript in production.

Instead the credits page has a simple clock example and you can see clearly that the page load extra JS required by Next.JS to run the React code on the client.

## Known Bugs

* This works with v7 - if you upgrade to v8 there is a regression in getCssLinks() in component NextHeadWithInlineCss, i've opened an issue on https://github.com/zeit/next.js/issues/7641
* Preact does not work with v8 - https://github.com/zeit/next.js/issues/7231
* Also see this closed ticket https://github.com/zeit/next.js/issues/7660

