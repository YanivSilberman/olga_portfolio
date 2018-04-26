// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import { fontImports } from '../libraries/fonts';

const FormContainer = ({ title, children }) => (
  <App>
    <Helmet>
      <title>{title}</title>
      {fontImports.map(font => <link href={font} rel="stylesheet" />)}
    </Helmet>
    {children}
  </App>
);

FormContainer.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

FormContainer.defaultProps = {
  title: 'olga sanchis'
};

export default FormContainer;
