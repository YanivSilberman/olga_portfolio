import gql from 'graphql-tag';

export default gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(id: $projectId) {
      id
    }
  }
`;
