import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    axios.get('/transactions').then(res => {
      console.log('TXXXXXXXX', res.data)
      this.setState({
        transactions: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <History transactions={this.state.transactions}/>
        <BuySell />
      </div>
    )
  }
};

export default App;
