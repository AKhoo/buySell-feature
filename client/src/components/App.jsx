import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {
        _id: '5c1d6ac20d27ce00ee61d0f9',
        stockName: 'Facebook, Inc.',
        stockTicker: 'FB',
        currentPrice: 193.09,
        marketCap: 561082611151.32,
        sector: 'Technology'
      },
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
  }

  changeStock() {
    axios.get('/stocks/:stockTicker').then(res => {
      console.log('STOCCCCCCCK', res.data)
      this.setState({
        stock: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <History transactions={this.state.transactions}/>
        <BuySell stock={this.state.stock}/>
      </div>
    )
  }
};

export default App;
