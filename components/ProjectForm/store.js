/* eslint-disable */
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { dispatchers } from './redux';
import getProjectGql from './get';

const mapDispatchToProps = dispatch => ({
  actions: {
    updateCreate: payload => dispatch(dispatchers.updateCreate(payload))
  }
});

export const withData = graphql(getProjectGql, {
  name: 'getGql',
  options: ({ projectId }) => ({
    variables: { projectId }
  }),
  props: ({
    getGql: { Project, loading },
    ownProps: { projectId, actions: { updateCreate } }
  }) => {
    if (loading || projectId === null || !Project) return null;
    updateCreate(Project);
  }
});

export default comp =>
  connect(null, mapDispatchToProps)(
    compose(withData)(comp)
  );
