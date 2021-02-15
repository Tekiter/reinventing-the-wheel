import styled from "styled-components";

export interface GridProps {
    children?: React.ReactNode;
    height?: number;
    width?: number;
    noGap?: boolean;
}

interface GridContainerProps {
    height: number;
    width: number;
    noGap: boolean;
}

const GridContainer = styled.div<GridContainerProps>`
    display: grid;

    grid-template-columns: repeat(${({ width }) => width}, auto);
    grid-template-rows: repeat(${({ height }) => height}, auto);

    ${({ noGap }) => (!noGap ? "column-gap: 3px; row-gap: 3px;" : null)}

    & > * {
        justify-self: stretch;
    }
`;

export default (function Grid(props) {
    const { children, height = 1, width = 1, noGap = false } = props;

    return (
        <GridContainer height={height} width={width} noGap={noGap}>
            {children}
        </GridContainer>
    );
} as React.FC<GridProps>);
