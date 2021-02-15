import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./index";

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        color: { control: "color" }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Number = Template.bind({});
Number.args = {
    children: "5",
    color: "#ffffff",
    fontSize: "1.3rem",
    bold: true,
    block: true
};

export const Util = Template.bind({});
Util.args = {
    children: "M+",
    color: "#f7f7f7",
    dense: true,
    bold: true
};
