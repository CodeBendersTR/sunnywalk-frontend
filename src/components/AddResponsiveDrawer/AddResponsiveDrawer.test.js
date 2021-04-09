import { render, screen } from "@testing-library/react";
import { AddResponsiveDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";


test("Check that Welcome UserName Renders", () => {
    render(<AddResponsiveDrawer />);
    const input = screen.getByText("Welcome UserName");
    expect(input).toBeInTheDocument();
});
/*
To Do:
Find what "Invariant failed: You should not use <Link> outside a <Router>" means here.
*/