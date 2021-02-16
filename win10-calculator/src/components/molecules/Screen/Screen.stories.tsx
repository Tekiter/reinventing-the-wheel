import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Screen, { ScreenProps } from ".";

export default {
    title: "molecules/Screen",
    component: Screen,

    argTypes: { onKey: { action: "onKey" } }
} as Meta;

const Template: Story<ScreenProps> = (args) => <Screen {...args} />;

export const OnlyPrimary = Template.bind({});
OnlyPrimary.args = {
    primary: "0",
    secondary: ""
};

export const Basic = Template.bind({});
Basic.args = {
    primary: "83",
    secondary: "9*sqr(3)+2="
};
