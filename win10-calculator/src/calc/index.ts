import { processKey } from "./process-key";

export * from "./state";

export interface CalcScreen {
    primary: string;
    secondary: string;
}

export const calcAction = {
    key: processKey
} as const;
