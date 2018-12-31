import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
background-color: rgb(255, 255, 255);
border-bottom-color: rgb(244, 244, 245);
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(244, 244, 245);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(244, 244, 245);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(244, 244, 245);
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-top-style: none;
border-top-width: 0px;
box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 4px 1px, rgba(48, 51, 51, 0.09) 0px 3px 24px 0px;
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 0px;
position: relative;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Header = styled.header`
align-items: center;
border-bottom-color: rgb(244, 244, 245);
border-bottom-style: solid;
border-bottom-width: 1px;
border-left-color: rgb(244, 244, 245);
border-right-color: rgb(244, 244, 245);
border-top-color: rgb(244, 244, 245);
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 52px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 4px;
text-align: left;
text-size-adjust: 100%;
width: 275.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const TitleHeader = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
position: relative;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: border-color;
transition-timing-function: ease;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 114.828px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv2 = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 114.828px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: margin-right, opacity;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 63px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv2 = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: width;
transition-timing-function: ease;
white-space: nowrap;
width: 63px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Buy = styled.h3`
border-bottom-color: rgb(244, 85, 49);
border-bottom-style: solid;
border-bottom-width: 2px;
border-left-color: rgb(244, 85, 49);
border-right-color: rgb(244, 85, 49);
border-top-color: rgb(244, 85, 49);
box-sizing: border-box;
color: rgb(244, 85, 49);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
height: 47px;
letter-spacing: normal;
line-height: 22px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 12px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 12px;
margin-top: 0px;
padding-top: 12px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: border-color, color;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 51px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
          <BuySellDiv>
            <BuySellDiv2>
              <BuyDiv>
                <BuyDiv2>
                  <Buy>
                  Buy {this.state.stockTicker}
                  </Buy>
                </BuyDiv2>
              </BuyDiv>
            </BuySellDiv2>
          </BuySellDiv>
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
