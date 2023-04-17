import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: ${({ mr }) => `${mr}`};
  margin-left: ${({ ml }) => `${ml}`};
  margin-top: ${({ mt }) => `${mt}`};
  margin-bottom: ${({ mb }) => `${mb}`};
  
`

const InputField = styled.input`
  font-family: 'Nuckle';
  font-style: normal;
  font-weight: 539;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #333;
  background: #FFFFFF;
  border: 1px solid #E4E7EE;
  border-radius: 8px;
  padding-left: 18px;
  outline: none;
  height: ${({ height }) => height || '46px'};
  width: ${({ width }) => (width ? width : '100%')};
  border-top-right-radius: ${({ icon }) => icon && '0px'};
  border-bottom-right-radius: ${({ icon }) => icon && '0px'};
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:${({ icon }) => icon && '46px'} ;
  width:${({ icon }) => icon && '46px'} ;
  height: 46px;
  background: #0D63F3;
  border-radius: 0px 8px 8px 0px;
`

export { Container, InputField, Icon }