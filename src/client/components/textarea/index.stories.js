import React from "react";
import Textarea from "./index";

export default {
    title: "Unmind/Textarea",
    component: Textarea,
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
    <Textarea {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    placeholder: "type your note here",
    text: "",
    onChange: () => { console.log("clicked"); }
};
