import { render, screen } from "@testing-library/react";
import { AddResponsiveDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from 'react-router-dom'

//as addresponsivedrawer has links we need to put it within a container of routers.
test("Check Welcome UserName renders", () => {
    render(<Router><Route path="/" component={AddResponsiveDrawer} /></Router>)
    const input = screen.getByText("Welcome to the"); 
    expect(input).toBeInTheDocument();
});
test("Check Today's best times for a sunny walk renders", () => {
  render(<Router><Route path="/" component={AddResponsiveDrawer} /></Router>)
  const input = screen.getByText("Today's best times for a sunny walk"); 
  expect(input).toBeInTheDocument();
});
