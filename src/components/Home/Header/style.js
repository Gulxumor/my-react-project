import styled from "styled-components";
import header from '../../../assets/images/banner/2.jpg'

const Container = styled.header`
  width: 100%;
  background: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 131px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1339px) {
    padding: 0 30px;
  }

  @media (max-width: 884px) {
    padding: 0 20px;
  }

  @media (max-width: 676px) {
    padding: 0 10px;
  }
`

const Subtitle = styled.h4``
const Title = styled.h1`
  font-weight: 900;

  span {
    color: #fb774b
  }
`
const Description = styled.p`
  max-width: 380px;

  @media (max-width: 428px) {
    max-width: 230px;
  }
`

export { Container, Wrapper, Subtitle, Title, Description }