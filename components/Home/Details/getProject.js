import gql from 'graphql-tag';

export default gql`
  query getProject($projectId: ID) {
    Project(id: $projectId) {
      title
      image
      createdAt
      description
      galleries {
        id
        image
      }
      tools {
        name
      }
      tags {
        name
        color
      }
      projectTypes {
        name
      }
    }
  }
`;
