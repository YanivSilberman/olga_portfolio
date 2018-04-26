// @flow
import * as React from 'react';
import { CreateProjectForm } from '../components/ProjectForm';
import withData from '../libraries/withData';
import FormCon from '../containers/Form';

export default withData(props => (
  <FormCon {...props}>
    <CreateProjectForm />
  </FormCon>
));
