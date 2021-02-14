import styled from "styled-components";
import { darken, readableColor } from "polished";

export interface ButtonProps {
    children: React.ReactNode;
    color?: string;
    dense?: boolean;
    bold?: boolean;
    fontSize: number | string;
}

interface ButtonBaseProps {
    color: string;
    dense: boolean;
    bold: boolean;
    fontSize: number | string;
}

const ButtonBase = styled.button<ButtonBaseProps>`
    display: block;

    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    color: ${({ color }) => readableColor(color)};

    padding: ${({ dense }) => (dense ? "0.2em 0.5em" : "0.5em 1em")};

    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    font-size: ${({ fontSize }) => fontSize};

    &:hover {
        background-color: ${({ color }) => darken(0.1, color)};
        border: 1px solid ${({ color }) => darken(0.2, color)};
    }

    &:active {
        background-color: ${({ color }) => darken(0.2, color)};
    }

    &:focus {
        outline: none;
    }
`;

export default (function Button(props) {
    const { children, color = "#f2f2f2", dense = false, bold = false, fontSize = "" } = props;
    return (
        <ButtonBase color={color} dense={dense} bold={bold} fontSize={fontSize}>
            {children}
        </ButtonBase>
    );
} as React.FC<ButtonProps>);
