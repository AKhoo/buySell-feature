import React from 'react';
import BuySell from './BuySell.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <BuySell />
      </div>
    )
  }
};

export default App;