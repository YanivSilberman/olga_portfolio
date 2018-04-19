import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import AppIcons from '../components/AppIcons';
import TagManagerId from '../libraries/tagManager';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...page, styleTags, helmet: Helmet.rewind() };
  }

  // should render on <html>
  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <head>
  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map(el => this.props.helmet[el].toComponent())
      .filter(
        el =>
          el.length > 0 ||
          !(Object.keys(el).length === 0 && el.constructor === Object)
      );

    return keys.length ? keys : [];
  }

  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents()}>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="expires" content="10800" />
          <meta name="generator" content="RAN! 0.8.0" />
          {this.helmetHeadComponents()}
          {AppIcons()}
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/icons/up_logo.png"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${TagManagerId});`
            }}
          />
          {this.props.styleTags}
        </Head>
        <body>
          <noscript>
            <iframe
              title={TagManagerId}
              src={`https://www.googletagmanager.com/ns.html?id=${TagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
