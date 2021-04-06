import { render, screen } from "@testing-library/react";
import { LoginForm } from "../../components";
import "@testing-library/jest-dom/extend-expect";



test("Check the login text renders", () => {
    render(<LoginForm />);
    const input = screen.getByText("Log in");
    expect(input).toBeInTheDocument();
});


test("Check if the No account yet renders", () => {
    render(<LoginForm />);
    const input = screen.getByText("No account yet? Register");
    expect(input).toBeInTheDocument();
});

test("Check if the Forgot password renders", () => {
    render(<LoginForm />);
    const input = screen.getByText("Forgot password?");
    expect(input).toBeInTheDocument();
});
