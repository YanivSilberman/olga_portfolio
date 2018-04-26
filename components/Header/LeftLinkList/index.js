// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
// import { ApolloConsumer } from 'react-apollo';
import { A, LeftNav } from './styles';
import connect from './store';

const LeftLinkList = ({
  activeProjectType,
  allProjectTypes,
  actions: { activateType }
}) => (
  <LeftNav>
    <A active={activeProjectType === 'ALL'} onClick={() => activateType('ALL')}>
      All
    </A>
    {allProjectTypes &&
      allProjectTypes.map(t => (
        <A
          active={activeProjectType === t.id}
          onClick={() => activateType(t.id)}
        >
          {t.name.replace(/\b\w/g, l => l.toUpperCase())}
        </A>
      ))}
  </LeftNav>
);

LeftLinkList.propTypes = {
  allProjectTypes: PropTypes.array,
  activeProjectType: PropTypes.string,
  loadActiveType: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    activateType: PropTypes.func.isRequired
  }).isRequired
};

LeftLinkList.defaultProps = {
  allProjectTypes: null,
  activeProjectType: null
};

export default connect(LeftLinkList);
