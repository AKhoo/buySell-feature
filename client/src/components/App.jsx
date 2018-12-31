import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
background: #1b1b1d;
`;

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
      <Div>
        <History transactions={this.state.transactions}/>
        <BuySell stock={this.state.stock}/>
      </Div>
    )
  }
};

export default App;
