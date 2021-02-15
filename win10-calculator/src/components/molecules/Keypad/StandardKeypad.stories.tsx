import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StandardKeypad, { StandardKeypadProps } from "./StandardKeypad";

export default {
    title: "molecules/Keypad",
    component: StandardKeypad,

    argTypes: { onKey: { action: "onKey" } }
} as Meta;

const Template: Story<StandardKeypadProps> = (args) => <StandardKeypad {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
