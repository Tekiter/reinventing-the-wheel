import styled from "styled-components";
import { darken, readableColor } from "polished";
import { MouseEvent } from "react";

export interface ButtonProps {
    children: React.ReactNode;
    color?: string;
    dense?: boolean;
    bold?: boolean;
    fontSize?: number | string;
    block?: boolean;

    onClick?(event: MouseEvent): void;
}

type ButtonBaseProps = Omit<Required<ButtonProps>, "children">;

const ButtonBase = styled.button<ButtonBaseProps>`
    ${({ block }) => (block ? "display: block; width: 100%" : "")};

    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    color: ${({ color }) => readableColor(color)};

    padding: ${({ dense }) => (dense ? "0.2em 0.5em" : "0.5em 1em")};

    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    font-size: ${({ fontSize }) => fontSize};
    text-align: center;

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

const fn = () => {};

const defaultProps: Required<ButtonProps> = {
    children: undefined,
    color: "#f2f2f2",
    dense: false,
    bold: false,
    fontSize: "",
    block: false,
    onClick: fn
};

export default (function Button(props) {
    const newProps = { ...defaultProps, ...props };

    return <ButtonBase {...newProps}></ButtonBase>;
} as React.FC<ButtonProps>);
