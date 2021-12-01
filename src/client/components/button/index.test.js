import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

test("renders button", () => {
    const { container } = render(<Button text="demo" onClick={() => {}} />);

    expect(container).toMatchSnapshot();
});
