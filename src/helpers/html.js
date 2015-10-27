import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import DocumentMeta from 'react-document-meta';
import config from 'config';

export default class Application extends React.Component {
  static propTypes = {
    state: React.PropTypes.object,
    component: React.PropTypes.node
  }

  render() {
    const metaData = config.app;
    const {state, component} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
    <html>
      <head>
        {DocumentMeta.renderAsReact()}
        <script type="application/javascript" dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(state)};`}}/>
        <link rel="stylesheet" href="/normalize.css" />
      </head>
      <body>
        <div id="react-view" dangerouslySetInnerHTML={{__html: content}}/>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
    );
  }
};
