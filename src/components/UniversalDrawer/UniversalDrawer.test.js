
import { render, screen } from "@testing-library/react";
import { UniversalDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from 'react-router-dom'



describe('Testing UniversalDrawer', () => {
    afterEach(() => jest.clearAllMocks())
        test("Check Sunny Walk renders", () => {
            const requiredProps={
                Greeting:"Login Page",
                ButtonProfile:"Main",
                FirstButton:"../",
                ButtonUserHome:"Register",
                SecondButton:"../Register"
            }
            render(
                <Router>
                     <Route path="/" component={UniversalDrawer} {...requiredProps} />
                </Router>
            );
            expect(screen.getByText("SUNNY WALK")).toBeInTheDocument()
        });
      
})


/*



this test has been commented out as the function hasnt been fully implemented yet.
test("Check the login text renders", () => {
    render(<Router><Route path="/" component={UniversalDrawer} /></Router>)
    const input = screen.getByText("Welcome to the"); 
    expect(input).toBeInTheDocument();
});




                Greeting="Login Page"
                ButtonProfile="Main"
                FirstButton={"../"}
                ButtonUserHome="Register"
                SecondButton={"../Register"}

*/
