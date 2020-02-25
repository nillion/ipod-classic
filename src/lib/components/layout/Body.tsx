import styled from '@emotion/styled';

interface IBodyProps {
    theme?: ITheme;
}

const Body = styled.aside<IBodyProps>`
    width: 375px;
    height: 665px;
    border: 1px solid transparent;
    border-radius: 38px;
    background: linear-gradient(
        45deg,
        ${({ theme }) => theme.darkBackground},
        ${({ theme }) => theme.lightBackground}
    );
    box-shadow: inset 5px -5px 25px 3px ${({ theme }) => theme.midGrey};
`;

export default Body;
