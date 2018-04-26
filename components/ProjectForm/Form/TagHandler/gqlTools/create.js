import gql from 'graphql-tag';

const funcParam = `
  $name: String!
`;

const gqlParam = `
  name: $name
`;

export default gql`
  mutation createTool(${funcParam}) {
    createTool(${gqlParam}) {
      id
      name
    }
  }
`;
