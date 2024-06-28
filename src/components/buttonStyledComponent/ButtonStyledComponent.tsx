import styled from "@emotion/styled";

interface StyledButtonProps {
    primary?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    margin: 5px;
    border-radius: 16px;
    border: solid 1.5px rgb(246, 250, 248);
    padding: 5px;
    font-size: 18px;
    color: #1361a5;
    background-color: ${(props) => (props.primary ? 'rgb(155, 7, 7)' : 'rgb(183, 171, 202)')};
    cursor: pointer;
    :hover {
        opacity: 0.7;
        color: rgb(240, 185, 6);
        background-color: rgb(74, 82, 105);
        font-size: larger;
    }
`;

export default function ButtonStyledComponent() {
    return (
        <StyledButton primary={true}>Click me</StyledButton>
    );
}
