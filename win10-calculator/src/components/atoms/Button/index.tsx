import styled from "styled-components";
import { darken } from "polished";

export interface ButtonProps {
    children: React.ReactNode;
    color: string;
}

const ButtonBase = styled.button<ButtonProps>`
    display: block;

    background-color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};

    &:hover {
        border: 1px solid ${(props) => darken(0.1, props.color)};
    }

    &:active {
    }

    &:focus {
        outline: none;
    }
`;

export default (function Button(props) {
    const { children, color = "#f2f2f2" } = props;
    return <ButtonBase color={color}>{children}</ButtonBase>;
} as React.FC<ButtonProps>);
