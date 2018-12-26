import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Transaction from './Transaction.jsx';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: this.props.transactions
    }
  }

  render() {
    return (
     <div>
       <ul>
         {this.props.transactions.map((tx, i) => {
           return <Transaction key={i} tx={tx} />
         })}
       </ul>
     </div>
    )
  }
};

export default History;
