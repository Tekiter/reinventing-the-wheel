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

type FunctionCode = "FUNinverse" | "FUNsqr" | "FUNsqrt" | "FUNprecent";

type ActionCode = "ACN=" | "ACNdelete" | "ACNC" | "ACNCE";

type MemoryCode = "MEMC" | "MEMR" | "MEM+" | "MEM-" | "MEMS";

export type KeyCode = NumberCode | OperatorCode | RealCode | FunctionCode | ActionCode | MemoryCode;
