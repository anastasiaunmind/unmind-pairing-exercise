import React from "react";
import Button from "./index";

export default {
    title: "Unmind/Button",
    component: Button,
    parameters: {
        backgrounds: {
            default: "lightgrey",
            values: [
                { name: "lightgrey", default: true, value: "lightgrey" },
                { name: "grey", value: "grey" },
                { name: "white", value: "white" },
            ],
        },
    },
};

const Template = (args) => (
    <Button {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    text: "Next",
    onClick: () => { console.log("clicked"); }
};
