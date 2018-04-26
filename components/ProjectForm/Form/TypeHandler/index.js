import React from 'react';
import PropTypes from 'prop-types';
import { TypeHandlerContainer, TypeOption } from './styles';
import connect from './store';

class TypeHandler extends React.Component {
  isPicked = id => this.props.projectTypes.some(i => id === i);

  select = id => {
    const old = this.props.projectTypes;
    let newTypes;
    if (this.isPicked(id)) {
      newTypes = old.filter(i => i !== id);
    } else {
      newTypes = old.concat(id);
    }
    this.props.update(newTypes);
  };

  render() {
    const { allProjectTypes } = this.props;

    return (
      <TypeHandlerContainer>
        {allProjectTypes &&
          allProjectTypes.map(t => (
            <TypeOption
              onClick={() => this.select(t.id)}
              picked={this.isPicked(t.id)}
            >
              {t.name}
            </TypeOption>
          ))}
      </TypeHandlerContainer>
    );
  }
}

TypeHandler.propTypes = {
  update: PropTypes.func.isRequired,
  projectTypes: PropTypes.array,
  allProjectTypes: PropTypes.array
};

TypeHandler.defaultProps = {
  projectTypes: [],
  allProjectTypes: null
};

export default connect(TypeHandler);
