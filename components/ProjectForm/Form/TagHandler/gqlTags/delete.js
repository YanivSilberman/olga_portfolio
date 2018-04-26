import gql from 'graphql-tag';

export default gql`
  mutation deleteTag($tagId: ID!) {
    deleteTag(id: $tagId) {
      id
    }
  }
`;
