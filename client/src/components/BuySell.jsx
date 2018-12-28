import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
  margin: 0 auto;
  width: 275.77px;
  height: 488px
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: left;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 90px;
  color: black;
  background: #1b1b1d;
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
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-bottom: 64px;
  padding-top: 64px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 19px;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  color: #fff;
  background-color: #1b1b1d;
`;

const BodyLabel = styled.label`
  width: 227.77px;
  height: 48px;
  font-size: 1.5em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1b1b1d;
  color: white;
`;

const BodyDiv = styled.div`
  font-size: 1.45em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  border: 1px solid #ddd;
`;

const BodyInput = styled.input`
  width: 82px;
  height: 36px;
  font-size: 1.45em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
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
        stockName: '',
        stockTicker: '',
        currentPrice: '',
        shares: ''
      }
      this.buyStock = this.buyStock.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      shares: e.target.value
    })
  }

  buyStock(e) {
    const transaction = {
      stockName: req.body.stockName,
      stockTicker: req.body.stockTicker,
      currentPrice: req.body.currentPrice,
      quantity: this.state.shares,
    };
    e.preventDefault();
    if (parseInt(this.state.shares) !== NaN){
      axios.post('/transactions', { name:term })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
    return (
    <Form onSubmit={this.buyStock}>
      <Header>
        <TitleHeader>
          Buy FB
        </TitleHeader>
      </Header>
        <BodyLabel>
          <BodyDiv>Shares
          <BodyInput onChange={this.handleChange}></BodyInput>
          </BodyDiv>
        </BodyLabel>
        <BodyLabel>
          <BodyDiv>Market Price
          $132.41</BodyDiv>
        </BodyLabel>
        <BodyLabel>
          <BodyDiv>Estimated Cost
          $132.41</BodyDiv>
        </BodyLabel>
        <Button onClick={this.buyStock}>BUY</Button>
    </Form>
    );
  }
};

export default BuySell;
