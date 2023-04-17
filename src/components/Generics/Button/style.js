import styled from "styled-components";

const getType = ({ type }) => {
    switch (type) {
        case 'primary':
            return {
                background: '#0D63F3',
                color: '#FFFFFF'
            };

        case 'secondary':
            return {
                background: '#fb774b',
                color: '#fff'
            }

        case 'light':
            return {
                background: '#FFFFFF',
                color: '#1E1E1E'
            }

        case 'success':
            return {
                background: 'linear-gradient(270deg, #4D5EF6 0%, #F64D4D 100%)',
                color: '#FFFFFF'
            }

        case 'register':
            return {
                color: '#AB5598',
                border: '1px solid #AB5598',
            }

        default:
            return {
                background: '#1C1C1C',
                color: '#FFFFFF'
            };
    }

}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 40px;
  padding: 0 18px;
  /* min-width: ${({ width }) => (width ? width : '100%')}; */
  width: ${({ width }) => (width ? width : 'auto')};
  margin-right: ${({ mr }) => `${mr}`};
  margin-left: ${({ ml }) => `${ml}`};
  margin-top: ${({ mt }) => `${mt}`};
  margin-bottom: ${({ mb }) => `${mb}`};
  outline: none;
  border: none;
  font-family: 'Nuckle';
  font-size: 16px;
  line-height: 19px;
  text-transform:uppercase;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'capitalize'};
  ${getType}
  transition: transform .2s ease-in-out;
  :active {
    transform: scale(0.97);
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    height: 38px;
  }
  @media (max-width: 476px) {
    font-size: 12px;
    height: 35px;
  }
`

export { Container }