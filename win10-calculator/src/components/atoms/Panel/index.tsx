import styled, { css } from "styled-components";

export interface PanelProps {
    children?: React.ReactNode;
    expand: boolean;
    background: string;
}

type PanelDivProps = Omit<PanelProps, "children">;

const defaultProps: PanelProps = {
    children: null,
    expand: false,
    background: "transparent"
};

const expandStyle = css`
    display: block;

    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const PanelDiv = styled.div<PanelDivProps>`
    ${({ expand }) => (expand ? expandStyle : null)}

    background-color: ${({ background }) => background}
`;

export default (function Panel(props) {
    const newProps = { ...defaultProps, ...props };

    return <PanelDiv {...newProps}></PanelDiv>;
} as React.FC<PanelProps>);
