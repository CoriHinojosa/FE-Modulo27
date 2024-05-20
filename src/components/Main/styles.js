import styled from 'styled-components';

const MainStyled = styled.main`
    height: 100%;
    width: 100%;
    background-color: rgb(255, 241, 225);
    text-align: center;
`;

const MainH1 = styled.h1`
    font-size: 2.2rem;
    color: ${props => props.primary ? "#EF7044"  : "#000"};
`

export { MainStyled, MainH1 };