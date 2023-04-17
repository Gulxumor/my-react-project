import styled from "styled-components";
import { ReactComponent as heart } from '../../assets/icons/heart.svg'
import { ReactComponent as heartred } from '../../assets/icons/heart-red.svg'

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }
`

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 30px;

  @media (max-width: 1000px) {
      grid-gap: 25px;
  }

  @media (max-width: 884px) {
    grid-gap: 20px;
  }

  @media (max-width: 676px) {
    grid-template-columns: 1fr;
  }
`

ProductInfo.Left = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`

ProductInfo.Left.SmallImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  gap: 7px;
  img {
    width: 100%;
  }

  @media (max-width: 676px) {
  }

  @media (max-width: 428px) {
  }
`

ProductInfo.Right = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  gap: 13px;

  @media (max-width: 884px) {
    gap: 11px;
  }

  @media (max-width: 676px) {
    gap: 10px;
  }

`

ProductInfo.Right.Url = styled.p``

ProductInfo.Right.Category = styled.h4`
  text-align: left;
  font-weight: 700;
  color: #333;
  opacity: 0.6;
`

ProductInfo.Right.Title = styled.h4`
  text-align: left;
  font-weight: 700;
`

ProductInfo.Right.Price = styled.h3`
  font-weight: 500;
`


const Select = styled.select`
  position: relative;
  max-width: 180px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #1d1d1d;
  display: block;
  text-transform: capitalize;
`

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  gap: ${({ icons }) => icons ? '15px' : '0px'};
  span {
    width: 35px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1d1d1d;
  }

  @media (max-width: 884px) {
    margin: 13px 0;
  }

  @media (max-width: 676px) {
    margin: 11px 0;
  }

  @media (max-width: 428px) {
    margin: 10px 0;
  }
`

ProductInfo.Right.Subtitle = styled.h4`
  margin-top: 15px;
`

ProductInfo.Right.Description = styled.p`

`

ProductInfo.Right.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid #1d1d1d;
  border-radius: 5px;
  :active {
    transform: scale(0.98);
  }
`



Icons.Heart = styled(heart)``
Icons.HeartRed = styled(heartred)``


export { Container, Wrapper, ProductInfo, Select, CounterWrapper, Icons }