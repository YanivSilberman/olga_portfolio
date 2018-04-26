import gql from 'graphql-tag';

export default gql`
  mutation deleteTool($tagId: ID!) {
    deleteTool(id: $tagId) {
      id
    }
  }
`;
