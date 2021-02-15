import { useCallback } from "react";
import { Button, Grid, Panel } from "../../atoms";
import TeX from "@matejmazur/react-katex";

export interface StandardKeypadProps {
    onKey?(): void;
}

interface KeyInfo {
    icon?: React.ReactNode;
    code: string;
    type: "primary" | "secondary" | "accent";
}

const keymap: KeyInfo[] = [
    {
        code: "%",
        type: "secondary"
    },
    {
        code: "CE",
        type: "secondary"
    },
    {
        code: "C",
        type: "secondary"
    },
    {
        code: "backspace",
        icon: "DEL",
        type: "secondary"
    },
    {
        code: "inverse",
        icon: <TeX math="{}^1{\mskip -5mu/\mskip -3mu}_x"></TeX>,
        type: "secondary"
    },
    {
        code: "square",
        icon: <TeX math="x^2"></TeX>,
        type: "secondary"
    },
    {
        code: "root",
        icon: <TeX math="\sqrt[2]{x}"></TeX>,
        type: "secondary"
    },
    {
        code: "divide",
        icon: "\u00F7",
        type: "secondary"
    },
    {
        code: "7",
        type: "primary"
    },
    {
        code: "8",
        type: "primary"
    },
    {
        code: "9",
        type: "primary"
    },
    {
        code: "multiply",
        icon: "\u00D7",
        type: "secondary"
    },
    {
        code: "4",
        type: "primary"
    },
    {
        code: "5",
        type: "primary"
    },
    {
        code: "6",
        type: "primary"
    },
    {
        code: "subtract",
        icon: "\u2212",
        type: "secondary"
    },
    {
        code: "1",
        type: "primary"
    },
    {
        code: "2",
        type: "primary"
    },
    {
        code: "3",
        type: "primary"
    },
    {
        code: "add",
        icon: "\u002B",
        type: "secondary"
    },
    {
        code: "complement",
        icon: <TeX math="{}^+{\mskip -5mu/\mskip -3mu}_-"></TeX>,
        type: "primary"
    },
    {
        code: "0",
        type: "primary"
    },
    {
        code: ".",
        type: "primary"
    },
    {
        code: "=",
        type: "accent"
    }
];

function getContent(key: KeyInfo): React.ReactNode {
    if (key.icon !== undefined) {
        return key.icon;
    }
    return key.code;
}

export default (function StandardKeypad() {
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

    return (
        <Panel background="#f2f2f2" pa="0.2rem">
            <Grid width={4} height={6}>
                {keymap.map((key) => (
                    <Button key={key.code} color={getColor(key)} bold={key.type === "primary"}>
                        {getContent(key)}
                    </Button>
                ))}
            </Grid>
        </Panel>
    );
} as React.VFC<StandardKeypadProps>);
