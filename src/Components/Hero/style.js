import styled from 'styled-components';
import { Rate } from 'antd';

const Title = styled.h1``
const Subtitle = styled.h3`
margin: 6px 0;
`
const Description = styled.p`
max-width: 514px;
`
const Btns = styled.div`
display: flex;
align-items: center;
gap: 24px;
margin-top: 37px;

@media(max-width:428px){
gap: 15px;
}

`
const Rating = styled(Rate)`
margin-top: 23px;
`
const Container = styled.div`
width: 100%;
`;
const Wrapper = styled.div`
max-width: 1440px;
width: 100%;
margin: auto;
padding: 0 50px;

@media(max-width:1300px){
padding:0px 86px;
}
@media(max-width:1200px){
padding:0px 76px;
}
@media(max-width:1050px){
padding:0px 66px;
}
@media(max-width:767px){
padding:0px 56px;
}
@media(max-width:428px){
padding:0px 25px;
}
`
export { Container, Wrapper, Rating,Title, Btns, Subtitle, Description };
