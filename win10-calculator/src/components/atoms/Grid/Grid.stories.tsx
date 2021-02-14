import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid, { GridProps } from "./index";
import { Button } from "..";

export default {
    title: "Atoms/Grid",
    component: Grid,
    argTypes: {
        color: { control: "color" },
        children: { control: null },
        noGap: { control: "boolean" }
    }
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    height: 6,
    width: 4,
    children: [...new Array(24)].map((v, i) => <Button key={`button-${i}`}>{i}</Button>)
};
