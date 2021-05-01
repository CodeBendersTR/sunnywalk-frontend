import { render, screen } from "@testing-library/react";
import { AddResponsiveDrawer } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from "react-router-dom";

//as addresponsivedrawer has links we need to put it within a container of routers.
// test("Check Welcome UserName renders", () => {
//     const requiredProps={
//         ButtonMain:"Main",
//         ButtonLogin:"Login", 
//         ButtonRegister:"Register",
//         ButtonProfile:"Profile"
//     }
//     render(
//         <Router>
//             <Route path="/" component={AddResponsiveDrawer} />
//         </Router>
//     );
//     const input = screen.getByText("My favourite walks");
//     expect(input).toBeInTheDocument();
// });
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
            //this is because there are more than one my favorite walks.
            expect(screen.getAllByText("My favourite walks")[0]).toBeInTheDocument()
        });
        //<AddResponsiveDrawer {...requiredProps}/>
        
})

// //Greeting="User Home Page" ButtonProfile="Main" FirstButton={"../"}
// //ButtonUserHome="Profile" SecondButton={"../Profile"}
// test("Check Today's best times for a sunny walk renders", () => {
//     render(
//         <Router>
//             <Route path="/" component={AddResponsiveDrawer} />
//         </Router>
//     );
//     const input = screen.getByText("Logout");
//     expect(input).toBeInTheDocument();
// });
