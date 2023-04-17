import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
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

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
`

const Description = styled.p`
  text-align: center;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 10px;

  @media (max-width: 884px) {
    grid-template-columns: repeat(3, 1fr);

  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`

export { Container, Wrapper, Title, Description, Products }