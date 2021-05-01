import { render, screen } from "@testing-library/react";
import { ProfileForm } from "../../components";
import "@testing-library/jest-dom/extend-expect";

test("Check Your Sunny Walk Profile renders", () => {
    render(<ProfileForm />);
    const input = screen.getByText("Please edit and confirm any changes below.");
    expect(input).toBeInTheDocument();
});

test("Check Please edit and confirm any changes below. renders", () => {
    render(<ProfileForm />);
    const input = screen.getByText("Please edit and confirm any changes below.");
    expect(input).toBeInTheDocument();
});

test("Check Current password renders", () => {
    render(<ProfileForm />);
    const input = screen.getByText("Your Preferences");
    expect(input).toBeInTheDocument();
});

test("Check New Password renders", () => {
    render(<ProfileForm />);
    const input = screen.getByText("confirm");
    expect(input).toBeInTheDocument();
});
