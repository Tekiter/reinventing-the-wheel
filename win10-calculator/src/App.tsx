import React from "react";
import "katex/dist/katex.min.css";

import GlobalStyle from "./theme/GlobalStyle";

import "./App.css";
import Calc from "./components/Calc";
import { ThemeProvider } from "styled-components";

import theme from "./theme/default";

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle />
                <Calc />
            </div>
        </ThemeProvider>
    );
}

export default App;
