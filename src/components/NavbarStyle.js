import styled from 'styled-components';
import { ReactComponent as logo } from "../components/assets/icons/furni.svg"
import { ReactComponent as user } from "../components/assets/icons/user.svg"
import { ReactComponent as cart } from "../components/assets/icons/cart.svg"

const Furni = styled(logo)``
const User = styled(user)``
const Cart = styled(cart)``

const Container = styled.header`
width:100%;
background:var(--green);
display:flex;
`;

const Wrapper = styled.div`
max-width: 1500px;
width:100%;
padding:40px 178px;
margin: auto;
display:flex;
align-items:flex-end;
justify-content:space-between;
border-bottom:7px solid transparent;
`

const Left = styled.div`
display:flex;
align-items:flex-end;
gap:95px;
`

const Icons = styled.div`
display:flex;
align-items:flex-end;
gap:21px;
`

const Ul = styled.ul`
display:flex;
gap:43px;

`

const Li = styled.li`
display:flex;
align-items:flex-end;
color:var(--white);
opacity: 0.5;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
border-bottom:7px solid transparent;

:hover{
    border-bottom: 7px solid var(--yellow);
    opacity: 100;
}
`

export { Container, Icons, Furni, Left, Ul, Li, Cart, User, Wrapper };
