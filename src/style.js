import styled, { css } from 'styled-components';

export const common = css`
    width:${(props) => props.w ? props.w + "px" : "100px"};
    height:${(props) => props.h ? props.h + "px" : "100px"};
    
    background: ${(props) => props.bg ? props.bg : "white"};
    color: ${(props) => props.color ? props.color : "black"};

    margin: ${(props) => props.margin ? props.margin + "px" : "0px"};
    margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};
    margin-right: ${(props) => props.mr ? props.mr + "px" : "0px"};
    margin-top: ${(props) => props.mt ? props.mt + "px" : "0px"};
    margin-bottom: ${(props) => props.mb ? props.mb + "px" : "0px"};
    
    padding: ${(props) => props.padding ? props.padding + "px" : "0px"};
    padding-left: ${(props) => props.pl ? props.pl + "px" : "0px"};
    padding-right: ${(props) => props.pr ? props.pr + "px" : "0px"};
    padding-top: ${(props) => props.pt ? props.pt + "px" : "0px"};
    padding-bottom: ${(props) => props.pb ? props.pb + "px" : "0px"};

    font-family: ${(props) => props.family ? props.family : "sans-serif"};
    font-size: ${(props) => props.fsize ? props.fsize + "px" : "16px"};

    border: ${(props) => props.border ? props.border : "none"};
    border-radius: ${(props) => props.br ? props.br + "px" : "0px"};
   
   cursor:${(props) => props.cursor ? props.cursor : "context-menu"};
`

 const Button = styled.button`
  ${common};

  :active{
    transform:scale(0.95)
   };
  
`;

export { Button, }