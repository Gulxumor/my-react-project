import styled from 'styled-components';
import { ReactComponent as girl } from '../components/assets/icons/girl.svg';

export const Container = styled.div`
max-width: 1550px;
width: 100%;
margin: 0 auto;

.slick-next, .slick-prev{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--green);
}

.slick-next{
    margin-right: -100px;
}

.slick-prev{
    margin-left: -100px;
}

.slider{
    margin: 0 auto;
}

`

export const Wrapper = styled.div`
/* display: flex; */
flex-direction: column;
align-items: center;
justify-content: center;
/* max-width: 1550px;
width: 100%; */
/* padding: 20px 178px; */
margin: auto;
`


export const Div = styled.div`
 max-width: 261px;
  max-height: 41px;
  width: 100%;
  height: 100px;
  margin: 95px auto 20px auto;
`;
export const Title = styled.h3`
    width:${({ w }) => w ? w + "px" : "130px"};
    height:${({ h }) => h ? h + "px" : "19px"};
    font-size: ${({ fs }) => fs ? fs + "px" : "18px"};
    line-height: ${({ lh }) => lh ? lh + "px" : "21.78px"};
    font-weight: ${({ fw }) => fw ? fw : "400"};
    text-align: center;
    margin: 0 670px;
    margin-top: ${({ mt }) => mt ? mt + "px" : "4px"};
    margin-bottom: ${(props) => props.mb ? props.mb + "px" : "0px"};

`
export const Text = styled.h4`
width: 770px;
height: 132px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 32px;
text-align: center;
margin: 47px 400px;
`
export const Image = styled(girl)`
    height: 86px;
    width: 86px;
    border-radius: 50%;
    align-items: center;
    margin: 0 700px;
`
