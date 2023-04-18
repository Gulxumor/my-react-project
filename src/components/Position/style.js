import styled from 'styled-components';
import { ReactComponent as Doiracha } from '../../assets/icons/doira.svg';

export const Right = styled.div``

export const Container = styled.div`
max-height: 5010px;
max-width: 1500px;
width: 100%;
margin:0 auto 180px auto;
display: flex;
position: relative;
`;

export const Wrapper = styled.div`
display: flex;
flex: 1;
flex-direction: ${({ fd }) => fd ? fd : "row"};
margin-left: ${({ ml }) => ml ? "33px" : "0px"};
`
export const Doira = styled(Doiracha)`
    width: 8px;
    height: 8px;
    margin-right: 13px;
`
export const Div = styled.div`
display: flex;
align-items: center;
justify-content: start;
`;



export const Img = styled.img`
    width:${(props) => props.w ? props.w + "px" : "100px"};
    height:${(props) => props.h ? props.h + "px" : "100px"};
    border-radius: ${(props) => props.br ? props.br + "px" : "10px"};
    margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};

`
export const Image = styled.img`
    width:291px;
    height:349px;
    border-radius:10px;
    position: absolute;
    left: 350px;
    top: 250px;

`

export const Title = styled.h3`
    width: 378px;
    height: 82px;
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 28px;
`

export const Text = styled.h3`
width: ${({ w }) => w ? "444px" : "194px"};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: var(--gray);
margin-top: ${({ mt }) => mt ? "31px" : "0px"};
margin-bottom: ${({ mb }) => mb ? mb : "0px"};
`