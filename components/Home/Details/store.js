import { graphql } from 'react-apollo';
import getProject from './getProject';

const gqlOptions = ({ modalId }) => ({
  variables: {
    projectId: modalId
  }
});

const mapDataToProps = ({ data: { Project, loading } }) => {
  if (loading) return null;
  return { Project };
};

export default comp =>
  graphql(getProject, { options: gqlOptions, props: mapDataToProps })(comp);
