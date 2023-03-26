import styled from 'styled-components';
import { Modal } from "antd";

const Container = styled(Modal)`
  .ant-modal-title,
  .ant-modal-footer,
  .ant-modal-close {
    display: none !important;
  }
  .ant-modal-content {
    padding: 0 !important;
  }
  :where(.css-dev-only-do-not-override-mxhywb).ant-modal .ant-modal-content {
    background-color: #333;
    border: none;
    outline: none;
  }
:where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 400px !important;
}

@media(max-width: 880px) {
 :where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 45% !important;
}   
}@media(max-width: 428px) {
 :where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 40% !important;
}   
}

`;

const Input = styled.input`
width: 100%;
height: 60px;
padding: 10px 15px 15px 15px;
font-size: 20px;
border-radius: 5px;
color: #fff;
outline-color: #666;
background-color: #333;
border: none;
outline: none;


@media(max-width: 880px) {
    height: 50px;
 :where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 45% !important;
}   
}@media(max-width: 428px) {
    height: 40px;
 :where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 40% !important;
}   
}
`

export { Container, Input };
