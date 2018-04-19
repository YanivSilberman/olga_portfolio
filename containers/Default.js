// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../../components/App';
import Header from '../../components/Header';
import { fontImport } from '../libraries/fonts';

const Default = ({ title, url, children }) => (
  <App>
    <Helmet>
      <title>{title}</title>
      {fontImport.map(font => <link href={font} rel="stylesheet" />)}
    </Helmet>
    <Header pathname={url.pathname} />
    {children}
  </App>
);

Default.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: 'olga sanchis'
};

export default Default;
