import { useState } from "react";
import { calcAction, entryToString, initCalcState } from "../../../calc";
import { Panel } from "../../atoms";
import { KeyEvent, StandardKeypad } from "../../molecules/Keypad";
import Screen from "../../molecules/Screen";

export interface StandardCalcProps {
    onAction: () => void;
}

export default (function StandardCalc() {
    const [calcState, setCalcState] = useState(initCalcState());

    function handleInput(e: KeyEvent) {
        setCalcState((state) => calcAction.key(state, e.code));
    }

    return (
        <Panel background="#f2f2f2">
            <Panel pb="1rem" px="0.5rem">
                <Screen
                    primary={calcState.buffer + ""}
                    secondary={entryToString(calcState.entry)}
                />
            </Panel>
            <StandardKeypad onKey={handleInput} />
        </Panel>
    );
} as React.VFC<StandardCalcProps>);
