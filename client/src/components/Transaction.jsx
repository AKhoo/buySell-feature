import React from 'react';

export default function Transaction (props) {
  return (
    <li>{props.tx.stockName}, {props.tx.stockTicker}, {props.tx.status}</li>
  )
}
