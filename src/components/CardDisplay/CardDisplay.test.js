import { render, screen } from "@testing-library/react";
import { CardDisplay } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check the weather forecast and daylight hours text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Check the Weather Forecast & Daylight Hours");
    expect(input).toBeInTheDocument();
});

test("Check Map Your Desitination text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Map Your Desitination");
    expect(input).toBeInTheDocument();
});

test("Check Rate Your Walks text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Rate Your Walks");
    expect(input).toBeInTheDocument();
});

test("Check walking on sunshine renders text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Walking on sunshine...map your preferences to hit favourite spots whether a playground, dog or skate park or something completely new.");
    expect(input).toBeInTheDocument();
});

test("Check song text renders.", () => {
    render(<CardDisplay />);
    const input = screen.getByText("Was your walk \"You are my sunshine\" or more like \"Ain't no sunshine\"...rate your walks and repeat the great ones...again and again.");
    expect(input).toBeInTheDocument();
});