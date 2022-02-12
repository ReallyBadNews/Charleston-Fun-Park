/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/html-has-lang */
import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <script
          src="https://js.adsrvr.org/up_loader.1.1.0.js"
          type="text/javascript"
          async
        />
        <script
          src="https://app.locbox.com/en-US/website_plugins/lb-cbdd44e1522ec9a5a23ae45cac178d988c65115e.js"
          type="text/javascript"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          dangerouslySetInnerHTML={{ __html: props.body }}
          key="body"
          id="___gatsby"
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
