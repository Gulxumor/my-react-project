import styled from "styled-components";
import banner from '../../../assets/images/banner/2.jpg'

const Container = styled.header`
  width: 100%;
  background: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 60vh;
  display: flex;
  align-items: center;

  @media (max-width: 1339px) {
    height: 50vh;
  }

  @media (max-width: 884px) {
    height: 40vh;
  }

  @media (max-width: 676px) {
    height: 35vh;
  }

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

const Subtitle = styled.h4`
  text-transform: uppercase;
  color: #fff;
  font-size: 22px;

  @media (max-width: 884px) {
    font-size: 20px;
  }

  @media (max-width: 676px) {
    font-size: 18px;
  }
  @media (max-width: 428px) {
    font-weight: 500;
    font-size: 16px;
  }

`
const Title = styled.h2`
  font-weight: 900;
  font-size: 42px;
  max-width: 450px;
  color: #fff;

  @media (max-width: 884px) {
    font-size: 36px;
    max-width: 400px;

  }

  @media (max-width: 676px) {
    font-weight: 800;
    font-size: 30px;
    max-width: 320px;
  }

  @media (max-width: 428px) {
    font-weight: 700;
    font-size: 27px;
    max-width: 300px;
  }
`
const Description = styled.p`
  max-width: 380px;

  @media (max-width: 428px) {
    max-width: 230px;
  }
`

export { Container, Wrapper, Subtitle, Title, Description }