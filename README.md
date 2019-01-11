# nextjs-static-generator-boilerplate
A boilerplate to build and export a static website without requiring a running server. Basically you can use Next.Js as a static generator removing unwanted features like extra JS files.

Currently used on https://antoniogallo.it/

For tecnically details and why i created this please read:
* https://medium.com/@antoniogallo.it/creating-an-optimized-big-static-page-website-with-next-js-dc53e5d7f941
* https://www.linkedin.com/pulse/creating-optimized-big-static-page-nextjs-antonio-gallo/

In the provided skeleton the index page does not have any react components on client side, so it will not load any extra Javascript.

Instead the credits page has a simple clock example and you can see clearly that the page has extra JS and the component can configured to have an animation when loading.
