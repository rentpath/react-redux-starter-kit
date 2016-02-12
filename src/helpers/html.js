// Component is the base class for a react component.
// PropTypes provides type checking for props in dev mode.
import React, { Component, PropTypes } from 'react';

// ReactDOMServer is the API for rendering React components into
// an HTML string. This is done on the server.
import ReactDOM from 'react-dom/server';

// HTML meta tags for React-based apps. Works for both client- and
// server-side rendering
import DocumentMeta from 'react-document-meta';

export default class Application extends Component {
  static propTypes = {
    state: PropTypes.object,
    component: PropTypes.node
  };

  render() {
    const {state, component} = this.props;

    // on the server, must render component to string manually and set using
    // dangerouslySetInnerHTML to send HTML over on the page load
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
    <html>
      <head>
        {DocumentMeta.renderAsReact()}
        <script type="application/javascript" dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(state)};`}}/>

        { /* makes browsers render all elements more consistently */ }
        <link rel="stylesheet" href="/normalize.css" />
      </head>
      <body>
        <div id="react-view" dangerouslySetInnerHTML={{__html: content}}/>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
    );
  }
}
