import gql from 'graphql-tag';

const funcParam = `
  $name: String!,
  $color: String!,
  $id: ID!
`;

const gqlParam = `
  name: $name
  color: $color
  id: $id
`;

export default gql`
  mutation updateTag(${funcParam}) {
    updateTag(${gqlParam}) {
      id
      name
      color
    }
  }
`;
