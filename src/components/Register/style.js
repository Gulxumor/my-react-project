import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 884px) {
    padding: 0 20px;
  }
`

Wrapper.Title = styled.h2``
Wrapper.Subtitle = styled.span`
  display: block;
  :hover {
    color: blue;
  }
`

export { Container, Wrapper }