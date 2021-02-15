import { useCallback } from "react";
import { Button, Grid, Panel } from "../../atoms";

export interface StandardKeypadProps {
    onKey?(): void;
}

interface KeyInfo {
    content?: React.ReactNode;
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
        code: "Backspace",
        type: "secondary"
    },
    {
        code: "inverse",
        type: "secondary"
    },
    {
        code: "square",
        type: "secondary"
    },
    {
        code: "root",
        type: "secondary"
    },
    {
        code: "divide",
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
        type: "secondary"
    },
    {
        code: "complement",
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
    if (key.content !== undefined) {
        return key.content;
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
