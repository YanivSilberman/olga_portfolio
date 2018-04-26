import gql from 'graphql-tag';

const funcParam = `
  $name: String!,
  $color: String!
`;

const gqlParam = `
  name: $name
  color: $color
`;

export default gql`
  mutation createTag(${funcParam}) {
    createTag(${gqlParam}) {
      id
      name
      color
    }
  }
`;
