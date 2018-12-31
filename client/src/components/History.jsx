import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Transaction from './Transaction.jsx';

const Section = styled.section`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 145px;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 60px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.3s;
transition-property: background;
transition-timing-function: ease;
width: 678.656px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
`;

const Header = styled.header`
border-bottom-color: rgb(255, 255, 255);
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(255, 255, 255);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(255, 255, 255);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(255, 255, 255);
border-top-style: none;
border-top-width: 0px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 30px;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 24px;
padding-bottom: 0px;
text-align: left;
text-size-adjust: 100%;
width: 678.656px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const HeaderDiv = styled.div`
align-items: baseline;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 30px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 678.656px;
-webkit-box-align: baseline;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const H2 = styled.h2`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 26px;
font-weight: 500;
height: 30px;
letter-spacing: -0.14px;
line-height: 30px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
text-align: left;
text-size-adjust: 100%;
width: 82.9375px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div1 = styled.div`
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
333px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
678.656px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div2 = styled.div`
background-color:
rgb(27, 27, 29)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
box-shadow:
rgba(0, 0, 0, 0.01) 0px 0px 4px 1px, rgba(0, 0, 0, 0.6) 0px 3px 24px 0px
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
333px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
12px
;
margin-left:
-24px
;
margin-right:
-24px
;
margin-top:
0px
;
position:
relative
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s, 0s, 0s, 0s
;
transition-duration:
0.15s, 0.15s, 0.15s, 0.15s
;
transition-property:
background, box-shadow, margin-bottom, -webkit-box-shadow
;
transition-timing-function:
ease, ease, ease, ease
;
width:
726.656px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div3 = styled.div`
border-bottom-color:
rgba(0, 0, 0, 0)
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-left-color:
rgb(14, 13, 13)
;
border-right-color:
rgb(14, 13, 13)
;
border-top-color:
rgba(0, 0, 0, 0)
;
border-top-style:
solid
;
border-top-width:
1px
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
333px
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
24px
;
margin-right:
24px
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
transition-delay:
0s
;
transition-duration:
0.15s
;
transition-property:
border-color
;
transition-timing-function:
ease
;
width:
678.656px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div4 = styled.div`
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
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
89px
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
-24px
;
margin-right:
-24px
;
margin-top:
0px
;
padding-bottom:
24px
;
padding-left:
24px
;
padding-right:
24px
;
padding-top:
24px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
726.656px
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

const Div5 = styled.div`
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
242px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s
;
transition-duration:
0.3s
;
transition-property:
height
;
transition-timing-function:
ease
;
width:
678.656px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div6 = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
flex
;
flex-direction:
column
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
41px
;
justify-content:
center
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
82.2969px
;
-webkit-box-direction:
normal
;
-webkit-box-orient:
vertical
;
-webkit-box-pack:
center
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Div7 = styled.div`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
flex
;
flex-direction:
column
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
41px
;
justify-content:
center
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
right
;
text-size-adjust:
100%
;
width:
102.828px
;
-webkit-box-direction:
normal
;
-webkit-box-orient:
vertical
;
-webkit-box-pack:
center
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const H31 = styled.h3`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
16px
;
font-weight:
500
;
height:
22px
;
letter-spacing:
normal
;
line-height:
22px
;
margin-block-end:
0px
;
margin-block-start:
0px
;
margin-bottom:
0px
;
margin-inline-end:
0px
;
margin-inline-start:
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
text-align:
left
;
text-size-adjust:
100%
;
width:
82.2969px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const H32 = styled.h3`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
16px
;
font-weight:
500
;
height:
22px
;
letter-spacing:
normal
;
line-height:
22px
;
margin-block-end:
0px
;
margin-block-start:
0px
;
margin-bottom:
0px
;
margin-inline-end:
0px
;
margin-inline-start:
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
text-align:
right
;
text-size-adjust:
100%
;
width:
102.828px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Span1 = styled.span`
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
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
19px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
right
;
text-size-adjust:
100%
;
width:
102.828px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

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
       <Section>
         <Header><HeaderDiv><H2>History</H2></HeaderDiv></Header>
       <Div1>
         <Div2>
           <Div3>
             <Div4>
               <Div6>
                <H31>Market Buy</H31>
               </Div6>
               <Div7>
                <H32></H32>
                <Span1></Span1>
               </Div7>
             </Div4>
             <Div5></Div5>
           </Div3>
         </Div2>
         {this.props.transactions.map((tx, i) => {
           return <Transaction key={i} tx={tx} />
         })}
       </Div1>
       </Section>
     </div>
    )
  }
};

export default History;
