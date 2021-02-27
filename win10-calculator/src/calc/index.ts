import { processKey } from "./process-key";
export interface CalcScreen {
    primary: string;
    secondary: string;
}

export interface CalcState {
    primary: string;
    secondary: string;
}

export function initCalcState(): CalcState {
    return {
        primary: "0",
        secondary: ""
    } as const;
}

export const calcAction = {
    key: processKey
} as const;
