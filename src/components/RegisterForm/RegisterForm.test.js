import { render, screen } from "@testing-library/react";
import { RegisterForm } from "../../components";
import "@testing-library/jest-dom/extend-expect";


test("Check the login text renders", () => {
    render(<RegisterForm />);
    const input = screen.getByText("Already have an account? Log In");
    expect(input).toBeInTheDocument();
});

test("Check if the Forgot password renders", () => {
    render(<RegisterForm />);
    const input = screen.getByText("First Name");
    expect(input).toBeInTheDocument();
});


test("Check if the Forgot password renders", () => {
    render(<RegisterForm />);
    const input = screen.getByText("Last Name");
    expect(input).toBeInTheDocument();
});


test("Check if the Forgot password renders", () => {
    render(<RegisterForm />);
    const input = screen.getByText("Email Address");
    expect(input).toBeInTheDocument();
});


test("Check if the Forgot password renders", () => {
    render(<RegisterForm />);
    const input = screen.getByText("Password");
    expect(input).toBeInTheDocument();
});
