import PropTypes from 'prop-types';
import connect from './store';
import Form from './Form';

const ProjectForm = props => {
  /*
    if (props.authenticated) {
      return (
        <div>
          <h1>You are not signed in</h1>
          <button onClick={() => Router.pushRoute('/signin')}>
            Go To Sign In
          </button>
        </div>
      );
    }
  */
  console.log('projectId', props.projectId);
  return <Form {...props} />;
};

ProjectForm.propTypes = {
  projectId: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    updateCreate: PropTypes.func.isRequired
  }).isRequired
};

ProjectForm.defaultProps = {
  projectId: null
};

export const EditProjectForm = connect(ProjectForm);
export const CreateProjectForm = ProjectForm;
