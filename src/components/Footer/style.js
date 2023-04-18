import styled from 'styled-components';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as linkedn } from '../../assets/icons/linkedin.svg';

const Facebook = styled(facebook)``
const Instagram = styled(instagram)``
const Twitter = styled(twitter)``
const Linkedn = styled(linkedn)``
const Furni = styled.h3`
width: 95px;
height: 39px;
font-weight: 500;
font-size: 32px;
line-height: 39px;
`
const Section = styled.section`
max-width: 1500px;
width: 100%;
margin: 200px auto 100px auto;
display: flex;
justify-content: space-between;
border-bottom:  1px solid #EFF2F1;
padding-bottom: 32px;
`;
const Div = styled.div`
width: 41px;
height: 41px;
background: #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-left: ${({ ml }) => ml ? "11px" : "0px"};
`
const Wrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
`
const Bottom = styled.div`
display: flex;
`
const Text = styled.h3`
width: 380px;
height: 97px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: var(--gray);
margin: 19px 0 60px 0;
`
const InnerWrapper = styled.div`
display: flex;
flex: 1;
margin-top: 50px;
`
InnerWrapper.First = styled.div`
margin: 0 80px 0 80px;
`
const Ul = styled.ul`
`
Ul.Li = styled.li`
width:${(props) => props.w ? props.w + "px" : "100px"};
list-style-type: none;
margin: 10px 0;
font-weight: 400;
font-size: 14px;
color: #6A6A6A;
    

`
export { Section,Ul,InnerWrapper, Furni, Div, Wrapper, Text, Bottom, Facebook, Instagram, Twitter, Linkedn, };
