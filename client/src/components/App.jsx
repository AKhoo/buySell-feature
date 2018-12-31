import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Body = styled.body`
background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgb(27, 27, 29)
;
background-image:
none
;
background-origin:
padding-box
;
background-position-x:
0%
;
background-position-y:
0%
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3983.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-bottom:
0px
;
padding-left:
0px
;
padding-right:
0px
;
padding-top:
0px
;
text-size-adjust:
100%
;
width:
1033px
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const RootDiv = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3983.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-bottom:
0px
;
padding-left:
0px
;
padding-right:
0px
;
padding-top:
0px
;
text-size-adjust:
100%
;
width:
1033px
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3983.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-bottom:
0px
;
padding-left:
0px
;
padding-right:
0px
;
padding-top:
0px
;
text-size-adjust:
100%
;
width:
1033px
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Main = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3983.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
min-width:
1036px
;
text-size-adjust:
100%
;
width:
1036px
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MainContainer = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3855.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
6px
;
margin-right:
6px
;
margin-top:
0px
;
padding-top:
36px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
1024px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Row = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3779.56px
;
justify-content:
space-between
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
-6px
;
margin-right:
-6px
;
margin-top:
0px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
1036px
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
justify
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ColL = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
flex-basis:
66.6667%
;
flex-grow:
0
;
flex-shrink:
0
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3779.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
padding-left:
6px
;
padding-right:
6px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
690.656px
;
-webkit-box-direction:
normal
;
-webkit-box-flex:
0
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ColR = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
display:
block
;
flex-basis:
27.7778%
;
flex-grow:
0
;
flex-shrink:
0
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
3779.56px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-right:
0px
;
padding-left:
6px
;
padding-right:
6px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
287.766px
;
-webkit-box-direction:
normal
;
-webkit-box-flex:
0
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
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
      <Body>
      <RootDiv>
        <Div>
          <Main>
            <MainContainer>
              <Row>
                <ColL>
                <History transactions={this.state.transactions}/>
                </ColL>
                <ColR>
                <BuySell stock={this.state.stock}/>
                </ColR>
              </Row>
            </MainContainer>
        </Main>
        </Div>
      </RootDiv>
      </Body>
    )
  }
};

export default App;
