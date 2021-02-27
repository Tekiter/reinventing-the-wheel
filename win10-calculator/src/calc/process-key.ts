import { CalcState } from ".";
import { codePrefix, codeSuffix, KeyCode } from "./code";

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

            if (primary === "-0" || primary === "-") {
                primary = "0";
            }
            return { ...state, primary };
        }
    } else if (action === "CE") {
        return { ...state, primary: "0" };
    } else if (action === "C") {
        return { ...state, primary: "0" };
    }
    return { ...state };
}

function realState(state: CalcState, code: KeyCode): CalcState {
    const action = codeSuffix(code);

    if (action === ".") {
        if (state.primary !== "0" && state.primary.indexOf(".") == -1) {
            return { ...state, primary: state.primary + "." };
        }
    } else if (action === "+-") {
        if (state.primary[0] === "-") {
            return { ...state, primary: state.primary.substring(1) };
        } else if (state.primary !== "0") {
            return { ...state, primary: "-" + state.primary };
        }
    }
    return { ...state };
}

const stateMap: { [type: string]: (state: CalcState, code: KeyCode) => CalcState } = {
    NUM: numberState,
    ACN: actionState,
    REA: realState
};

export function processKey(state: CalcState, code: KeyCode): CalcState {
    const type = codePrefix(code);

    if (stateMap[type]) {
        return stateMap[type](state, code);
    }
    return state;
}
