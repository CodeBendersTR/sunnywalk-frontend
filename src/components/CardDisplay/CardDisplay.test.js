import { render, screen } from "@testing-library/react";
import { CardDisplay } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check the weather forecast and daylight hours text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Check the Weather Forecast & Daylight Hours");
    expect(input).toBeInTheDocument();
});

test("Check Map Your Route text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Map Your Route");
    expect(input).toBeInTheDocument();
});

test("Check Rate Your Walks text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Rate Your Walks");
    expect(input).toBeInTheDocument();
});
