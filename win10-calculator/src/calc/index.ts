import { codePrefix, codeSuffix, KeyCode } from "./code";

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

function numberState(state: CalcState, code: KeyCode): CalcState {
    const raw = codeSuffix(code);

    let primary;

    if (state.primary === "" || state.primary === "0") {
        primary = raw;
    } else {
        primary = state.primary + raw;
    }

    return { ...state, primary };
}

function actionState(state: CalcState, code: KeyCode): CalcState {
    const action = codeSuffix(code);

    if (action === "delete") {
        if (state.primary.length > 0 && state.primary !== "0") {
            let primary = state.primary.substring(0, state.primary.length - 1);
            if (primary.length === 0) {
                primary = "0";
            }
            return { ...state, primary };
        }
    } else if (action === "CE") {
        return { ...state, primary: "0" };
    }
    return { ...state };
}

const stateMap: { [type: string]: (state: CalcState, code: KeyCode) => CalcState } = {
    NUM: numberState,
    ACN: actionState
};

function key(state: CalcState, code: KeyCode): CalcState {
    const type = codePrefix(code);

    if (stateMap[type]) {
        return stateMap[type](state, code);
    }
    return state;
}

export const calcAction = {
    key
} as const;
