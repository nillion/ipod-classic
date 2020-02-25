import styled from '@emotion/styled';

interface IControlsProps {
    theme?: ITheme;
}

const Controls = styled.section<IControlsProps>`
    position: relative;
    margin: 0 auto;
    top: 30px;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.lightBackground};
    box-shadow: inset 5px -5px 30px -7px ${({ theme }) => theme.darkGrey};
    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 99%;
        border: 1px solid ${({ theme }) => theme.veryDarkGrey};
    }
    &:before {
        left: 50%;
        transform: rotate(45deg);
    }
    &:after {
        top: 0;
        left: 50%;
        transform: rotate(135deg);
    }
    box-shadow: inset 5px -5px 50px -7px ${({ theme }) => theme.midGrey};
`;

export default Controls;
