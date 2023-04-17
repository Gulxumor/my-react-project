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
  margin: auto;
  display: flex;
  gap: 40px;


  @media (max-width: 884px) {
    padding: 0px 20px;
    gap: 30px;

  }

  @media (max-width: 676px) {
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 676px) {
    padding: 0px 20px;
  }
`

const ImageWrapper = styled.div`
  max-width: 200px;
  width: 100%;
  height: fit-content;
  max-height: 250px;
  border: 1px solid black;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 676px) {
    align-items: center;
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

const Edit = styled.p`
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid #333;
  padding: 4px 10px;
  border-radius: 4px;
  :active {
    transform: scale(0.97);
  }

  @media (max-width: 884px) {
    top: -40px;
    right: 20px;
  }

  @media (max-width: 676px) {
    top: -60px;
    right: 20px;
    font-size: 14px;
  }
`

export { Container, Wrapper, ImageWrapper, Content, Title, Description, Edit }