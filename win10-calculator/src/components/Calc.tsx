import styled from "styled-components";

const Frame = styled.div`
    background-color: ${(props) => props.theme.color.background};
    height: 100%;
    width: 100%;
`;

export default (function () {
    return <Frame></Frame>;
} as React.VFC);
