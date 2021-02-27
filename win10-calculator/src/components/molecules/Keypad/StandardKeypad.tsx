import { useCallback } from "react";
import { Button, Grid, Panel } from "../../atoms";
import TeX from "@matejmazur/react-katex";
import { KeyCode } from "../../../calc/code";

export interface StandardKeypadProps {
    onKey?(event: KeyEvent): void;
}

export interface KeyEvent {
    code: KeyCode;
}

interface KeyInfo {
    icon?: React.ReactNode;
    code: KeyCode;
    type: "primary" | "secondary" | "accent";
}

const keymap: KeyInfo[] = [
    {
        code: "FUNpercent",
        icon: "%",
        type: "secondary"
    },
    {
        code: "ACNCE",
        icon: "CE",
        type: "secondary"
    },
    {
        code: "ACNC",
        icon: "C",
        type: "secondary"
    },
    {
        code: "ACNdelete",
        icon: "DEL",
        type: "secondary"
    },
    {
        code: "FUNinverse",
        icon: <TeX math="{}^1{\mskip -5mu/\mskip -3mu}_x"></TeX>,
        type: "secondary"
    },
    {
        code: "FUNsquare",
        icon: <TeX math="x^2"></TeX>,
        type: "secondary"
    },
    {
        code: "FUNsqrt",
        icon: <TeX math="\sqrt[2]{x}"></TeX>,
        type: "secondary"
    },
    {
        code: "OPR/",
        icon: "\u00F7",
        type: "secondary"
    },
    {
        code: "NUM7",
        icon: "7",
        type: "primary"
    },
    {
        code: "NUM8",
        icon: "8",
        type: "primary"
    },
    {
        code: "NUM9",
        icon: "9",
        type: "primary"
    },
    {
        code: "OPR*",
        icon: "\u00D7",
        type: "secondary"
    },
    {
        code: "NUM4",
        icon: "4",
        type: "primary"
    },
    {
        code: "NUM5",
        icon: "5",
        type: "primary"
    },
    {
        code: "NUM6",
        icon: "6",
        type: "primary"
    },
    {
        code: "OPR-",
        icon: "\u2212",
        type: "secondary"
    },
    {
        code: "NUM1",
        icon: "1",
        type: "primary"
    },
    {
        code: "NUM2",
        icon: "2",
        type: "primary"
    },
    {
        code: "NUM3",
        icon: "3",
        type: "primary"
    },
    {
        code: "OPR+",
        icon: "\u002B",
        type: "secondary"
    },
    {
        code: "REA+-",
        icon: <TeX math="{}^+{\mskip -5mu/\mskip -3mu}_-"></TeX>,
        type: "primary"
    },
    {
        code: "NUM0",
        icon: "0",
        type: "primary"
    },
    {
        code: "REA.",
        icon: ".",
        type: "primary"
    },
    {
        code: "ACN=",
        icon: "=",
        type: "accent"
    }
];

function getContent(key: KeyInfo): React.ReactNode {
    if (key.icon !== undefined) {
        return key.icon;
    }
    return key.code;
}

export default (function StandardKeypad(props) {
    const { onKey = () => {} } = props;

    const getColor = useCallback((key: KeyInfo): string => {
        if (key.type === "primary") {
            return "white";
        } else if (key.type === "secondary") {
            return "#f7f7f7";
        } else if (key.type === "accent") {
            return "lightblue";
        }
        throw new Error("Invalid color type");
        return "";
    }, []);

    const handleClick = useCallback(
        (code) => () => {
            onKey({
                code
            });
        },
        []
    );

    return (
        <Panel background="#f2f2f2" pa="0.2rem">
            <Grid width={4} height={6}>
                {keymap.map((key) => (
                    <Button
                        key={key.code}
                        color={getColor(key)}
                        bold={key.type === "primary"}
                        onClick={handleClick(key.code)}>
                        {getContent(key)}
                    </Button>
                ))}
            </Grid>
        </Panel>
    );
} as React.VFC<StandardKeypadProps>);
