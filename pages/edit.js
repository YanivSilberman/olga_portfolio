// @flow
import * as React from 'react';
import { EditProjectForm } from '../components/ProjectForm';
import withData from '../libraries/withData';
import FormCon from '../containers/Form';

export default withData(props => {
  const id = props.url.query.projectId || null;
  return (
    <FormCon {...props}>
      <EditProjectForm projectId={id} />
    </FormCon>
  );
});
