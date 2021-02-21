type NumberCode =
    | "NUM0"
    | "NUM1"
    | "NUM2"
    | "NUM3"
    | "NUM4"
    | "NUM5"
    | "NUM6"
    | "NUM7"
    | "NUM8"
    | "NUM9"
    | "NUM0"
    | "NUMA"
    | "NUMB"
    | "NUMC"
    | "NUMD"
    | "NUME";

type OperatorCode = "OPR+" | "OPR-" | "OPR*" | "OPR/" | "OPR<<" | "OPR>>" | "OPR%";

type RealCode = "REA." | "REA+-";

type FunctionCode = "FUNinverse" | "FUNsquare" | "FUNsqrt" | "FUNpercent";

type ActionCode = "ACN=" | "ACNdelete" | "ACNC" | "ACNCE";

type MemoryCode = "MEMC" | "MEMR" | "MEM+" | "MEM-" | "MEMS";

export type KeyCode = NumberCode | OperatorCode | RealCode | FunctionCode | ActionCode | MemoryCode;

export function codePrefix(code: KeyCode): string {
    return code.substr(0, 3);
}

export function codeSuffix(code: KeyCode): string {
    return code.substring(3);
}

function codeCheck(code: KeyCode, type: string) {
    return typeof code === "string" && codePrefix(code) === type;
}

export function isNumberCode(code: KeyCode): boolean {
    return codeCheck(code, "NUM");
}

export function isActionCode(code: KeyCode): boolean {
    return codeCheck(code, "ACN");
}
