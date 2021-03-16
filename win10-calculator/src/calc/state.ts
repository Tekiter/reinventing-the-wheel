export interface OperationEntry {
    type: string;
    data?: string;
}

export interface CalcState {
    buffer: string;
    entry: OperationEntry[];
    inputEnd: boolean;
}

export function initCalcState(): CalcState {
    return {
        buffer: "0",
        entry: [],
        inputEnd: false
    };
}

export function entryToString(entry: OperationEntry[]): string {
    let ret = "";

    for (let e of entry) {
        ret += e.data;
    }

    return ret;
}
