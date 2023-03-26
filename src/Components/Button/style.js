import styled from 'styled-components';

const getType = ({type}) => {
    switch (type) {
        case "primary": return {}
        case "secondary": return {
            border: "2px solid #fff",
            background: "transparent"

        }; default: return {}

    }
}
const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 193px;
height: 56px;
background: #FA4776;
border-radius: 41px;
color: #fff;
border: none;
gap: ${({ icon }) => icon && "12px"};
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.04em;
color: #fff;
${getType}
transition: transform .4s ease;
:active{
    transform: scale(.95);
}

`;

export { Container };
