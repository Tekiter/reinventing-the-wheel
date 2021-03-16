import { CalcState } from ".";
import { codePrefix, codeSuffix, KeyCode } from "./code";

function numberState(state: CalcState, code: KeyCode): CalcState {
    const raw = codeSuffix(code);

    let primary;

    if (state.buffer === "" || state.buffer === "0") {
        primary = raw;
    } else {
        primary = state.buffer + raw;
    }

    return { ...state, buffer: primary, inputEnd: false };
}

function actionState(state: CalcState, code: KeyCode): CalcState {
    const action = codeSuffix(code);

    if (action === "delete") {
        if (state.buffer.length > 0 && state.buffer !== "0") {
            let primary = state.buffer.substring(0, state.buffer.length - 1);
            if (primary.length === 0) {
                primary = "0";
            }

            if (primary === "-0" || primary === "-") {
                primary = "0";
            }
            return { ...state, buffer: primary };
        }
    } else if (action === "CE") {
        return { ...state, buffer: "0" };
    } else if (action === "C") {
        return { ...state, buffer: "0", entry: [] };
    }
    return { ...state };
}

function realState(state: CalcState, code: KeyCode): CalcState {
    const action = codeSuffix(code);

    if (action === ".") {
        if (state.buffer !== "0" && state.buffer.indexOf(".") == -1) {
            return { ...state, buffer: state.buffer + "." };
        }
    } else if (action === "+-") {
        if (state.buffer[0] === "-") {
            return { ...state, buffer: state.buffer.substring(1) };
        } else if (state.buffer !== "0") {
            return { ...state, buffer: "-" + state.buffer };
        }
    }
    return { ...state };
}

function operationState(state: CalcState, code: KeyCode): CalcState {
    const action = codeSuffix(code);

    const entry = [...state.entry];
    if (state.inputEnd && entry.length > 0 && entry[entry.length - 1].type === "operator") {
        entry.pop();
    } else {
        entry.push({ type: "number", data: state.buffer });
    }

    entry.push({ type: "operator", data: action });

    return { ...state, entry: entry, buffer: "0", inputEnd: true };
}

const stateMap: { [type: string]: (state: CalcState, code: KeyCode) => CalcState } = {
    NUM: numberState,
    ACN: actionState,
    REA: realState,
    OPR: operationState
};

export function processKey(state: CalcState, code: KeyCode): CalcState {
    const type = codePrefix(code);

    if (stateMap[type]) {
        return stateMap[type](state, code);
    }
    return state;
}
