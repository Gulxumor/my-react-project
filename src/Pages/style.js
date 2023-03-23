import styled from 'styled-components';
import bg from "../assets/images/bg-img.png"


const Container = styled.div`
background: linear-gradient(91.28deg, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 82.23%), url(${bg});
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export { Container };
