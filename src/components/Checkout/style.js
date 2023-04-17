import styled from "styled-components";
import { ReactComponent as heart } from '../../assets/icons/heart.svg'
import { ReactComponent as heartred } from '../../assets/icons/heart-red.svg'

const Container = styled.section`
  width: 100%;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
  }
  
  @media (max-width: 676px) {
    padding: 30px 20px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }
`

const Shipping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

Shipping.Title = styled.h3`
  font-weight: 600;
`

const Subtotal = styled.div`
  background-color: #FDE4E4;
  padding: 30px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

Subtotal.Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${({ total }) => total ? '1px solid #DDDDDD' : 'none'};
  padding-top: ${({ total }) => total ? '20px' : ""};
`

Subtotal.Title = styled.h4`
  font-weight: 500;
`

export { Container, Wrapper, Shipping, Subtotal }