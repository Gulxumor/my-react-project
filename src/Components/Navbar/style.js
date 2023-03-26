import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as notification } from '../../assets/icons/notification.svg';
const Logo = styled(logo)`
@media (max-width:767px) {
 width:100px;
}
`
const Search = styled(search)`
cursor: pointer;
`
const Notification = styled(notification)`
cursor: pointer;
`
const Container = styled.header`
position: sticky;
top: 0;
width: 100%;
background: linear-gradient(180deg, #0B1220 12.29%, rgba(0, 0, 0, 0.07) 100%);
`;
const Wrapper = styled.div`
  max-width: 1440px;
  height: 133px;
  width: 100%;
  margin: auto;
  padding: 50px 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 40px;

  .nav-right{
    justify-content: flex-end;
    width: 100%;
  }
  .menu{
    display: none;
  }
  @media (max-width:1300px) {
  padding: 40px 46px;
  height: 113px;
  } 
  @media (max-width:1200px) {
    padding: 30px 36px;
  height: 103px;
  }
  @media (max-width:1050px) {
  height: 90px;
  .nav-left{
    display: none;
  }
  .menu{
    display: block;
  }
  .menu svg{
    fill: var(--white);
    width: 30px;
    height: 30px;
  }
  }
  @media(max-width:767px) {
  padding: 20px 16px;
  height: 80px;
  grid-template-columns: auto .5fr 1fr;

}
`;
const Column = styled.div`
display: flex;
align-items: center;
`
const NavItems = styled.ul`
display: flex;
align-items: center;
gap: 40px;

@media (max-width:1300px) {
    gap: 30px;
} 
@media (max-width:1200px) {
    gap: 20px;
}

`
NavItems.NavItem = styled.li`
list-style-type: none;
`
NavItems.NavItem.NavLink = styled.a`
text-decoration: none;
`
export { Container, Wrapper, Column, Logo, NavItems, Search, Notification };