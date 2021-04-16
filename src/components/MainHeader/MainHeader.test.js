import { render, screen } from "@testing-library/react";
import { MainHeader } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check the weather forecast and daylight hours text renders.", () => {
    render(<MainHeader />);
    const input = screen.getByText("SUNNY WALK");
    expect(input).toBeInTheDocument();
});

test("Check Map Your Route text renders.", () => {
    render(<MainHeader />);
    const input = screen.getByText("Log In");
    expect(input).toBeInTheDocument();
});

test("Check Rate Your Walks text renders.", () => {
    render(<MainHeader />);
    const input = screen.getByText("Sign Up");
    expect(input).toBeInTheDocument();
});
