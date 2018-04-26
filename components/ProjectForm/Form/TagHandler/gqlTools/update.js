import gql from 'graphql-tag';

const funcParam = `
  $name: String!,
  $id: ID!
`;

const gqlParam = `
  name: $name
  id: $id
`;

export default gql`
  mutation updateTool(${funcParam}) {
    updateTool(${gqlParam}) {
      id
      name
    }
  }
`;
