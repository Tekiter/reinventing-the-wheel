import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StandardKeypad from "./StandardKeypad";

export default {
    title: "molecules/Keypad",
    component: StandardKeypad,
    argTypes: {}
} as Meta;

const Template: Story = (args) => <StandardKeypad {...args} />;

export const Basic = Template.bind({});
