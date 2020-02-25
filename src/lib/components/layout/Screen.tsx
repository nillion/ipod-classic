import styled from '@emotion/styled';

interface ISceenProps {
    theme?: ITheme;
}

const Screen = styled.section<ISceenProps>`
    position: relative;
    margin: 30px auto 0px auto;
    width: 284px;
    height: 230px;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.darkScreenBackground},
        ${({ theme }) => theme.lightScreenBackground}
    );
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px 2px ${({ theme }) => theme.veryDarkGrey};
    font-family: 'ChicagoFont', 'Arial';
    font-size: 130%;
    color: ${({ theme }) => theme.screenDark};
    box-shadow: inset 0px 0px 20px 1px ${({ theme }) => theme.darkGrey};
`;

export default Screen;
