import styled, { css } from "styled-components";

export interface PanelProps {
    children?: React.ReactNode;
    expand?: boolean;
    background?: string;

    pa?: string | number;
    pl?: string | number;
    pr?: string | number;
    pt?: string | number;
    pb?: string | number;
}

type PanelDivProps = Omit<PanelProps, "children">;

const defaultProps: Required<PanelProps> = {
    children: null,
    expand: false,
    background: "transparent",

    pa: 0,
    pl: 0,
    pr: 0,
    pt: 0,
    pb: 0
};

const expandStyle = css`
    display: block;

    width: 100%;
    height: 100%;
    overflow: hidden;
`;

function calcPadding(props: PanelDivProps): string {
    const { pa } = props;
    const padding = [pa, pa, pa, pa];

    return padding.join(" ");
}

const PanelDiv = styled.div<PanelDivProps>`
    ${({ expand }) => (expand ? expandStyle : null)}

    padding: ${(props) => calcPadding(props)};

    background-color: ${({ background }) => background};
`;

export default (function Panel(props) {
    const newProps = { ...defaultProps, ...props };

    return <PanelDiv {...newProps}></PanelDiv>;
} as React.FC<PanelProps>);
