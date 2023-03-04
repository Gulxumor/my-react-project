import styled from 'styled-components';

const Container = styled.main`
  width:100%;
  background:var(--green);
`;
const Wrapper = styled.div`
  max-width:1500px;
  width:100%;
  padding: 0 178px ;
  margin:auto;
  display:flex;
  justify-content:space-between;

`
const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:128px;
`

Content.RichText = styled.h1`
  max-width:419px;

`

const Button = styled.button`
  width:${(props) => props.w ? props.w + "px" : "122px"};
  height:${(props) => props.h ? props.h + "px" : "50px"};
  border: ${(props) => props.border ? props.border : "none"};
  background: ${(props) => props.bg ? props.bg : "black"};
  color: ${(props) => props.color ? props.color : "white"};
  border-radius:35px;
  padding:11px 35px;

  :hover{
    background: var(--yellow);
    color:var(--white);
    border:none;
    color:black
  }
  
  :active{
    transform:scale(0.95);
   };
`
const Btn = styled.div`
  display:flex;
  align-items:center;
  gap:14px;
`
const Img = styled.img`
  max-width: 710px;
  max-height: 581.28px;
`

export { Container, Img, Btn, Button, Wrapper, Content };
