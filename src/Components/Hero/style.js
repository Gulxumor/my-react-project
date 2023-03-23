import styled from 'styled-components';
import { Rate } from 'antd';

const Container = styled.div`
width: 100%;
`;
const Rating = styled(Rate)`
margin-top: 23px;
`

const Wrapper = styled.div`
max-width: 1440px;
width: 100%;
margin: auto;
padding:36px 96px;
`

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

`


export { Container, Wrapper, Rating,Title, Btns, Subtitle, Description };
