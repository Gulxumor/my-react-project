import styled from "styled-components";

const Container = styled.header`
  width: 100%;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 676px) {
    padding: 30px 10px;
  }

  @media (max-width: 428px) {
    padding: 20px 0px;
    column-gap: 30px;
    row-gap: 20px;
  }

  @media (max-width: 376px) {
    padding: 20px 0px;
    column-gap: 20px;
    row-gap: 20px;
  }
`

const Brand = styled.img`

  @media (max-width: 376px) {
    width: 130px;
  }

  :hover {
    transform: scale(0.95);
  }
`


export { Container, Wrapper, Brand }