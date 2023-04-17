import styled from "styled-components";
import { ReactComponent as hamburger } from '../../assets/icons/menu.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-width: 320px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 100px;

  @media (max-width: 1339px) {
    height: 90px;
  }

  @media (max-width: 884px) {
    height: 80px;
  }

  @media (max-width: 676px) {
    height: 60px;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 131px;

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

const Logo = styled.img`
  @media (max-width: 884px) {
    width: 130px;
  }
  @media (max-width: 676px) {
    display: none;
  }
`

const Column = styled.div`

  @media (max-width: 676px) {
    flex: 1;
    :last-child {
      display: flex;
      justify-content: flex-end;
    }
  }

`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;

  @media (max-width: 676px) {
    display: none;
  }
`

const MobileLogo = styled.img`
  display: none;
  width: 110px;
  @media (max-width: 676px) {
    display: block;
  }
`

const Hamburger = styled(hamburger)`
  display: none;
  fill: {
    color: #222;
  }
  @media (max-width: 676px) {
    display: block;
  }
`

const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
  padding-top: 30px;
`

const Wrapper = styled.div`
  
`



export { Container, Wrapper, Nav, NavWrapper, Column, Ul, MobileUl, Hamburger, Logo, MobileLogo }