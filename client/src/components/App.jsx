import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {},
      transactions: []
    }
  }

  componentDidMount() {
    axios.get('/transactions').then(res => {
      // console.log('TXXXXXXXX', res.data)
      this.setState({
        transactions: res.data
      })
    })
    axios.get('/stocks/:stockTicker').then(res => {
      console.log('STOCCCCCCCK', res.data)
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
