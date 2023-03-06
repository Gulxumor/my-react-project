import styled from 'styled-components';
import { ReactComponent as Doiracha} from '../components/assets/icons/doira.svg';

export const Container = styled.div`
max-height: 5010px;
max-width: 1500px;
width: 100%;
margin:0 auto;
display: flex;
border:2px solid red;
position: relative;
`;

export const Wrapper = styled.div`
border: 1px solid blue;
display: flex;
flex: 1;
flex-direction: ${({ fd }) => fd ? fd : "row"};
`
export const Doira = styled(Doiracha)`
    width: 8px;
    height: 8px;
`
export const Div = styled.div`
display: flex;
align-items: center;
`;
 
 
export const Right = styled.div``

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
width: 444px;
height: 105px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: var(--gray);
`