import styled from 'styled-components';

export const Container = styled.div`
max-width: 1500px;
width: 100%;
margin: 0 auto;
padding: 36px auto;
display: flex;
justify-content:space-between;
margin-bottom: 20px;
`;

export const Link = styled.p`
    width:${(props) => props.w ? props.w + "px" : "200px"};
    /* width: 120px; */
    font-size: ${(props) => props.fsize ? props.fsize + "px" : "14px"};
    

`

export const Wrapper = styled.h4`
display: flex;
padding-right: 0;
/* gap:42px ; */
`