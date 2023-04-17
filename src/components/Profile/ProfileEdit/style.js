import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Wrapper = styled.div`
  position: relative;
  max-width: 840px;
  width: 100%;
  padding: 50px 0px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;


  @media (max-width: 884px) {
    padding: 40px 20px;
    gap: 30px;

  }

  @media (max-width: 676px) {
    padding: 40px 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 676px) {
    padding: 10px 20px;
  }
`

const ImageWrapper = styled.div`
  max-width: 200px;
  width: 100%;
  height: fit-content;
  max-height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 676px) {
    max-width: 150px;

  }
`

ImageWrapper.UserImage = styled.img`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 676px) {
    grid-template-columns: 1fr;
  }
`

Content.Specialist = styled.h4`
  color: blue;
  @media (max-width: 676px) {
    font-size: 16px
  }
`

Content.Password = styled.input`
  color: blue;
  border: none;
  outline: none;
  background-color: none;
  width: auto;
`

const Title = styled.h2`
  text-align: left;
  font-weight: 700;

  @media (max-width: 676px) {
    font-size: 22px
  }
`

const Description = styled.p`
  text-align: left;
`

const Save = styled.p`
  border: 1px solid #333;
  padding: 4px 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  :active {
    transform: scale(0.97);
  }

  @media (max-width: 884px) {
  }

  @media (max-width: 676px) {
    font-size: 14px;
  }
`

export { Container, Wrapper, ImageWrapper, Content, Title, Description, Save }