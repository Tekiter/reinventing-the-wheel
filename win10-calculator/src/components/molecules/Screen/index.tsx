import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

export interface ScreenProps {
    primary: string;
    secondary: string;
}

const Container = styled.div`
    text-align: right;
`;

const PrimaryBox = styled.div`
    font-size: 2.3rem;
    font-weight: bold;
`;

const SecondaryBoxContainer = styled.div`
    font-size: 1rem;
    overflow-x: hidden;
`;

function isOverflow(element: HTMLElement | null) {
    if (element) {
        return element.clientWidth < element.scrollWidth;
    }
    return false;
}

function SecondaryBox(props: { children: React.ReactNode }) {
    const textRef = useRef<HTMLDivElement>(null);

    const overflow = useMemo(() => isOverflow(textRef.current), [props.children]);

    useEffect(() => {}, [overflow]);

    return (
        <SecondaryBoxContainer>
            <div ref={textRef}>{props.children}</div>
        </SecondaryBoxContainer>
    );
}

export default (function Screen(props) {
    const { primary = "", secondary = "" } = props;

    return (
        <Container>
            <SecondaryBox>{secondary}</SecondaryBox>
            <PrimaryBox>{primary}</PrimaryBox>
        </Container>
    );
} as React.VFC<ScreenProps>);
