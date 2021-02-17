import { useEffect, useState } from "react";
import { CalcScreen } from "../../../utils/calc";
import { Panel } from "../../atoms";
import { StandardKeypad } from "../../molecules/Keypad";
import Screen from "../../molecules/Screen";

export interface StandardCalcProps {
    screen: CalcScreen;

    onAction: () => void;
}

function useScreen(initPrimary = "", initSecondary = "") {
    const [primary, setPrimary] = useState(initPrimary);
    const [secondary, setSecondary] = useState(initSecondary);

    const changeScreen = (newPrimary = "", newSecondary = "") => {
        setPrimary(newPrimary);
        setSecondary(newSecondary);
    };

    return [{ primary, secondary }, changeScreen] as const;
}

export default (function StandardCalc() {
    const [screen, setScreen] = useScreen();

    useEffect(() => {
        setScreen("0", "");
    }, []);

    return (
        <Panel background="#f2f2f2">
            <Panel pb="1rem" px="0.5rem">
                <Screen primary={screen.primary} secondary={screen.secondary} />
            </Panel>
            <StandardKeypad />
        </Panel>
    );
} as React.VFC<StandardCalcProps>);
