import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import allTypesGql from './allTypesGql';
import { dispatchers } from '../redux';

const mapStateToProps = state => ({
  activeProjectType: state.nav.activeProjectType
});

const mapDispatchToProps = dispatch => ({
  actions: {
    activateType: type => dispatch(dispatchers.activateType(type))
  }
});

const mapDataToProps = ({ data: { loading, allProjectTypes, error } }) => {
  if (loading || error) return null;
  return {
    allProjectTypes,
    loading
  };
};

export default comp =>
  connect(mapStateToProps, mapDispatchToProps)(
    graphql(allTypesGql, { props: mapDataToProps })(comp)
  );
