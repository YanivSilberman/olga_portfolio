import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default comp => connect(mapStateToProps)(comp);
