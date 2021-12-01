import React from "react";
import { render } from "@testing-library/react";
import MoodScore from ".";

test("renders MoodScore", () => {
    const { container } = render(<MoodScore score={4} onChange={() => {}} />);

    expect(container).toMatchSnapshot();
});

// todo unit tests