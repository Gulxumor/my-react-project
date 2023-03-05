import styled from 'styled-components';
import { ReactComponent as truck } from '../components/assets/icons/truck.svg';
import { ReactComponent as returnImg } from '../components/assets/icons/return.svg';
import { ReactComponent as shopBag } from '../components/assets/icons/shop-bag.svg';
import { ReactComponent as support } from '../components/assets/icons/support.svg';

const Container = styled.div`
  max-width:1500px;
  width:100%;
  margin: 0 auto 71px auto;
  border: 1px solid black;
  display: flex;
`;
const Truck = styled(truck)``
const Return = styled(returnImg)``
const Shop = styled(shopBag)``
const Support = styled(support)``

const Right = styled.div``

const Left = styled.div`
  display: flex;
  flex-direction: column;

`
const Image = styled.img`
  max-width: 514.82px;
  max-height: 629.1px;
  border-radius: 10px;
`

const Wrapper = styled.div`

`

const Top = styled.div``
const Bottom = styled.div`
display: flex;
`

export { Container, Left, Truck, Shop, Support, Return, Bottom, Wrapper,Top, Right, Image };
