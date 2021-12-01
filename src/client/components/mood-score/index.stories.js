import React, { useState } from "react";
import MoodScore from "./index";

export default {
    title: "Unmind/MoodScore",
    component: MoodScore,
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

const Template = (args) => {
    const [score, setScore] = useState(args.score, 4);

    return (
        <MoodScore {...args} score={score} onChange={(val) => {
            setScore(val);
        }} />
    );
};

export const Primary = Template.bind({});

Primary.args = {
    score: 4,
    isEditable: true,
    onChange: () => { console.log("clicked"); }
};
