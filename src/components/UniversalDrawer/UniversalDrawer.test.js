import { render, screen } from "@testing-library/react";
import { UniversalDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from 'react-router-dom'

test("Check the login text renders", () => {
    render(<Router><Route path="/" component={UniversalDrawer} /></Router>)
    const input = screen.getByText("Welcome to the"); 
    expect(input).toBeInTheDocument();
});