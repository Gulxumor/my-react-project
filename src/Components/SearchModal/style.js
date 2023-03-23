import styled from 'styled-components';
import { Modal } from "antd";

const Container = styled(Modal)``;

const Input = styled.input`
width: 100%;
height: fit-content;
padding: 10px 15px 15px 15px;
font-size: 20px;
border-radius: 5px;
color: #fff;
outline-color: #666;
background-color: #333;
border: none;
outline: none;
`

export { Container, Input };
