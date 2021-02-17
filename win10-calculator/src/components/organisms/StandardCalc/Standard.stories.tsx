import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import StandardCalc, { StandardCalcProps } from ".";

export default {
    title: "organisms/Standard",
    component: StandardCalc,

    argTypes: { onKey: { action: "onKey" } }
} as Meta;

const Template: Story<StandardCalcProps> = (args) => <StandardCalc {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
