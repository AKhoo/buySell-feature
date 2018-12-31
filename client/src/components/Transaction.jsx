import React from 'react';
import styled from 'styled-components';

const Div3 = styled.div`
border-bottom-color: rgba(0, 0, 0, 0);
border-bottom-style: solid;
border-bottom-width: 1px;
border-left-color: rgb(14, 13, 13);
border-right-color: rgb(14, 13, 13);
border-top-color: rgba(0, 0, 0, 0);
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: 24px;
margin-right: 24px;
margin-top: 0px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.15s;
transition-property: border-color;
transition-timing-function: ease;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div4 = styled.div`
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;
padding-top: 24px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div5 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.3s;
transition-property: height;
transition-timing-function: ease;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div6 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: flex;
flex-direction: column;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
justify-content: center;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-orient: vertical;
-webkit-box-pack: center;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div7 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: flex;
flex-direction: column;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
justify-content: center;
letter-spacing: 0.25px;
line-height: 19px;
text-align: right;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-orient: vertical;
-webkit-box-pack: center;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const H31 = styled.h3`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
letter-spacing: normal;
line-height: 22px;
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
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const H32 = styled.h3`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
letter-spacing: normal;
line-height: 22px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
text-align: right;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Span1 = styled.span`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
text-align: right;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default function Transaction (props) {
  return (
          <Div3>
            <Div4>
               <Div6>
                <H31>Market Buy</H31>
                {props.tx.date}
               </Div6>
               <Div7>
                <H32>{props.tx.currentPrice}</H32>
                <Span1>{props.tx.quantity} shares at {props.tx.currentPrice}</Span1>
               </Div7>
            </Div4>
            <Div5></Div5>
          </Div3>
  )
}
