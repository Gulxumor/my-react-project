import styled, { css } from 'styled-components';

export const common = css`
    width:${({ w }) => w ? w + "px" : "100px"};
    height:${({ h }) => h ? h + "px" : "100px"};
    
    background: ${({ bg }) => bg ? bg : "white"};
    color: ${({ color }) => color ? color : "black"};

    margin: ${({ m }) => m ? m + "px" : "0px"};
    margin-left: ${({ ml }) => ml ? ml + "px" : "0px"};
    margin-right: ${({ mr }) => mr ? mr + "px" : "0px"};
    margin-top: ${({ mt }) => mt ? mt + "px" : "0px"};
    margin-bottom: ${({ mb }) => mb ? mb + "px" : "0px"};
    
    padding: ${({ p }) => p ? p + "px" : "0px"};
    padding-left: ${({ pl }) => pl ? pl + "px" : "0px"};
    padding-right: ${({ pr }) => pr ? pr + "px" : "0px"};
    padding-top: ${({ pt }) => pt ? pt + "px" : "0px"};
    padding-bottom: ${({ pb }) => pb ? pb + "px" : "0px"};

    font-family: ${({ family }) => family ? family : "sans-serif"};
    font-size: ${({ fsize }) => fsize ? fsize + "px" : "16px"};

    border: ${({ border }) => border ? border : "none"};
    border-radius: ${({ br }) => br ? br + "px" : "0px"};
   
   cursor:${({ cursor }) => cursor ? cursor : "context-menu"};
`

 const Button = styled.button`
  ${common};

  :active{
    transform:scale(0.95)
   };
  
`;

export { Button, }