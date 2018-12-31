import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  width: 275.77px;
  height: 488px
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: left;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 90px;
  color: black;
  background: #1b1b1d;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

const Header = styled.h2`
  width: 275.77px;
  height: 52px
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 19px;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  color: #fff;
  background-color: #1b1b1d;
`;

const TitleHeader = styled.div`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 19px;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  color: #fff;
  background-color: #1b1b1d;
`;

const Body = styled.div`
  font-size: 1.5em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1b1b1d;
  color: white;
`;

const BodyLabel = styled.label`
  width: 227.77px;
  height: 48px;
`;

const BodyDiv = styled.div`
  border: 1px solid #ddd;
`;

const BodyInput = styled.input`
  width: 82px;
  height: 36px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  font-size: 1.5em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1b1b1d;
  color: white;
`;

class BuySell extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        stockName: props.stock.stockName,
        stockTicker: props.stock.stockTicker,
        currentPrice: props.stock.currentPrice,
        shares: 0,
        estimatedCost: 0
      }
      this.buyStock = this.buyStock.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    var cost = (e.target.value * this.state.currentPrice)
    this.setState({
      shares: e.target.value,
      estimatedCost: cost
    })
  }

  buyStock(e) {
    const transaction = {
      stockName: this.state.stockName,
      stockTicker: this.state.stockTicker,
      currentPrice: this.state.currentPrice,
      quantity: this.state.shares,
    };
    if (this.state.shares !== 0){
      axios.post('/transactions', transaction)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
    return (
    <Form>
      <Header>
        <TitleHeader>
          Buy {this.state.stockTicker}
        </TitleHeader>
        <TitleHeader>
          Sell {this.state.stockTicker}
        </TitleHeader>
      </Header>
      <Body>
        <BodyLabel>
          <BodyDiv>Shares
          <BodyInput onChange={this.handleChange}></BodyInput>
          </BodyDiv>
        </BodyLabel>
        <BodyLabel>
          <BodyDiv>Market Price
          {this.state.currentPrice}</BodyDiv>
        </BodyLabel>
        <BodyLabel>
          <BodyDiv>Estimated Cost
            {this.state.estimatedCost}
          </BodyDiv>
        </BodyLabel>
        <Button onClick={this.buyStock}>BUY</Button>
      </Body>
    </Form>
    );
  }
};

export default BuySell;
