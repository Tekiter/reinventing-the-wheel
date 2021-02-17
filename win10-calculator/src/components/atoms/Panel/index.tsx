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
    py?: string | number;
    px?: string | number;
}

type PanelDivProps = Omit<PanelProps, "children">;

const defaultProps: PanelProps = {
    children: null,
    expand: false,
    background: "transparent",

    pa: 0,
    pl: undefined,
    pr: undefined,
    pt: undefined,
    pb: undefined,
    py: undefined,
    px: undefined
};

const expandStyle = css`
    display: block;

    width: 100%;
    height: 100%;
    overflow: hidden;
`;

function calcPadding(props: PanelDivProps): string {
    const { pa, pt, pr, pb, pl, py, px } = props;
    const padding = [pa, pa, pa, pa];

    if (py !== undefined) {
        padding[0] = py;
        padding[2] = py;
    }
    if (px !== undefined) {
        padding[1] = px;
        padding[3] = px;
    }

    if (pt !== undefined) {
        padding[0] = pt;
    }
    if (pr !== undefined) {
        padding[1] = pr;
    }
    if (pb !== undefined) {
        padding[2] = pb;
    }
    if (pl !== undefined) {
        padding[3] = pl;
    }

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
