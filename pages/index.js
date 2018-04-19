// @flow
import * as React from 'react';
import Landing from '../components/Up/Landing';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

class App extends React.Component {
  state = {
    learnMore: false,
    displayLearnMore: false
  };

  loadLearnMore = () => this.setState({ learnMore: true });
  showLearnMore = () => this.setState({ displayLearnMore: true });

  render() {
    const { displayLearnMore, learnMore } = this.state;
    return (
      <DefaultCon {...this.props} displayLearnMore={displayLearnMore}>
        <Landing
          loadLearnMore={this.loadLearnMore}
          showLearnMore={this.showLearnMore}
          displayLearnMore={displayLearnMore}
          learnMore={learnMore}
        />
      </DefaultCon>
    );
  }
}

export default withData(props => <App {...props} />);
