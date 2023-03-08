import styled from 'styled-components';
import "../style"
import { ReactComponent as star } from '../components/assets/icons/star.svg';
export const Star = styled(star)``
export const Rating = styled.p``

export const Container = styled.div`
  max-width: 1550px;
  width:100%;
  height: 100vh;
  margin: auto;
  
  .slick-arrow{
    width: 50px;
    height: 50px;
    z-index: 999;
    cursor: pointer;
    margin: 0 300px;
  }
  .slick-next:before, .slick-prev:before {
    color: blue !important;
  }
@media (max-width:800px){
  .slick-arrow{
    display: none !important;
  }
  
}
@media (max-width:1000px){
  .slick-arrow{
    margin: 0 150px;
  }
}

`;
export const Img = styled.img`
width: 300px;
height: 300px;
margin:80px auto;
`
export const Category = styled.p`
text-transform: capitalize;
margin: 10px auto;
text-align: center;
`
export const Inner = styled.div`
margin: 0 600px;
display: flex;
align-items: center;
justify-content: center;
gap: 6px;

@media (max-width:800px) {
 margin: 0;
}

@media (max-width:1000px){
  margin: 0;
}

`
export const A = styled.a`
max-width: 1500px;
width: 100%;
color: pink;
text-decoration: none;
margin: 10px 130px;
`
