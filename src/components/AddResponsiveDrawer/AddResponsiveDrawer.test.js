import { render, screen } from "@testing-library/react";
import { AddResponsiveDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from "react-router-dom";

describe('Testing AddResponsiveDrawer', () => {
    afterEach(() => jest.clearAllMocks())
        test("Check Sunny Walk renders", () => {
            const requiredProps={
                Greeting:"User Home Page",
                ButtonProfile:"Main", 
                FirstButton:"../",
                ButtonUserHome:"Profile",
                SecondButton:"../Profile"
            }
            render(
                <Router>
                     <Route path="/" component={AddResponsiveDrawer} {...requiredProps} />
                </Router>
            );
            expect(screen.getByText("SUNNY WALK")).toBeInTheDocument()
        });
        test("Check My favourite walks renders", () => {
            const requiredProps={
                Greeting:"User Home Page",
                ButtonProfile:"Main", 
                FirstButton:"../",
                ButtonUserHome:"Profile",
                SecondButton:"../Profile"
            } 
            render(
                <Router>
                     <Route path="/" component={AddResponsiveDrawer} {...requiredProps} />
                </Router>
            );
            expect(screen.getAllByText("My favourite walks")[0]).toBeInTheDocument()
        });
})
