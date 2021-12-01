import React from "react";
import { render } from "@testing-library/react";
import Textarea from ".";

test("renders textarea", () => {
    const { container } = render(<Textarea placeholder="placeholder here" rows={10} text="" onChange={() => {}} />);

    expect(container).toMatchSnapshot();
});
