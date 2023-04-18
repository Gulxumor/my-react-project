import styled from 'styled-components';

export const Section = styled.section`
max-height: 5010px;
max-width: 1500px;
/* background:#EFF2F1; */
width: fit-content;
margin: 0 auto 50px auto;
height: fit-content;
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`;

export const Wrapper = styled.div`
display: flex;
`

export const Div = styled.div`
margin-left: 36px;
`

export const Img = styled.img`
    width:${(props) => props.w ? props.w + "px" : "100px"};
    height:${(props) => props.h ? props.h + "px" : "100px"};
    background-color: var(--color);
    border-radius: 3px;
`

export const Link = styled.a`
text-decoration: none;
color: var(--gray);
`