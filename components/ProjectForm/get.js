import gql from 'graphql-tag';

export default gql`
  query getProject($projectId: ID) {
    Project(id: $projectId) {
      title
      image
      description
      galleries {
        image
      }
      tools {
        id
      }
      tags {
        id
      }
      projectTypes {
        id
      }
    }
  }
`;
