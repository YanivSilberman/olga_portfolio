import { graphql } from 'react-apollo';
import allTypesGql from '../../../Header/LeftLinkList/allTypesGql';

const mapDataToProps = ({ data: { loading, allProjectTypes, error } }) => {
  if (loading || error) return null;
  return {
    allProjectTypes,
    loading
  };
};

export default comp => graphql(allTypesGql, { props: mapDataToProps })(comp);
