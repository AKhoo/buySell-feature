import React from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  font-size: 1.5em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1b1b1d;
  color: white;
`;

const Input = styled.input`
  font-size: 1.45em;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  border: 1px solid #ddd;
`;

class BuySell extends React.Component {
  constructor(props) {
      super(props);
      this.buyStock = this.buyStock.bind(this);
  }

  buyStock(e) {
    const email = new FormData(e.target).get('email');
    e.preventDefault();
    console.log(`New signup from ${email}`);
  }

  render() {
    return (
    <Form onSubmit={this.buyStock}>
      <Header>
        <TitleHeader>
          Buy FB
        </TitleHeader>
      </Header>
      <Input type="text" name="quantity" />
      <Button>BUY</Button>
    </Form>
    );
  }
};

export default BuySell;
