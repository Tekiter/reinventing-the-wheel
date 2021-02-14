import { ThemeProvider } from "styled-components";
import theme from "../src/theme/default";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    )
];
