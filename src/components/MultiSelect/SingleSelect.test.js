import { render, screen } from "@testing-library/react";
import { SingleSelects } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check Auto update renders", () => {
    render(<SingleSelects />);
    const input = screen.getByText("Auto Update");
    expect(input).toBeInTheDocument();
});
