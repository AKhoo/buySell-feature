import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 0 auto;
  width: 275.77px;
  height: 488px
  text-align: center;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 90px;
  color: black;
  background: white;
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;

const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;

const Input = styled.input`
  font-size: 1.45em;
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
      <Title>
        Facebook FB
      </Title>
      <Input type="text" name="quantity" />
      <Button>BUY</Button>
    </Form>
    );
  }
};

export default BuySell;
