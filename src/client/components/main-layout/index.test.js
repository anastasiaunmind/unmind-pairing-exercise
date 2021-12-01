import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("renders layout", () => {
    render(<App />);
    const linkElement = screen.getByTestId(/layout/i);
    expect(linkElement).toBeInTheDocument();
});
