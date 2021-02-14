import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PanelProps } from ".";
import { Panel } from "..";

export default {
    title: "Atoms/Panel",
    component: Panel,
    argTypes: {
        background: { control: "color" },
        expand: { control: "boolean" }
    }
} as Meta;

const Template: Story<PanelProps> = (args) => (
    <div style={{ height: "500px" }}>
        <Panel {...args} />
    </div>
);

export const Expanded = Template.bind({});
Expanded.args = {
    children: "haha",
    expand: true,
    background: "#9EC6E7"
};
