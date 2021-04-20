import { render, screen } from "@testing-library/react";
import { WeatherPreferenceSelect, NotificationPreferenceSelect } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check weather select main text shows", () => {
    render(<WeatherPreferenceSelect />);
    const input = screen.getByText("Weather");
    expect(input).toBeInTheDocument();
});


test("Check notification select main text shows", () => {
    render(<NotificationPreferenceSelect />);
    const input = screen.getByText("Notification");
    expect(input).toBeInTheDocument();
});
