import { render, screen } from "@testing-library/react";
import { UniversalHeader } from "../../components";
import "@testing-library/jest-dom/extend-expect";


describe('Testing UniversalHeader', () => {
    afterEach(() => jest.clearAllMocks())
        test("Check Login Button renders", () => {
            const requiredProps={
                ButtonProfile:"Login",
                FirstButton:"../Login",
                ButtonUserHome:"Register",
                SecondButton:"../Register"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Login")).toBeInTheDocument()
        });
        test("Check Register Button renders", () => {
            const requiredProps={
                ButtonProfile:"Login",
                FirstButton:"../Login",
                ButtonUserHome:"Register",
                SecondButton:"../Register"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Register")).toBeInTheDocument()
        });
        test("Check SUNNY WALK renders", () => {
            const requiredProps={
                ButtonProfile:"Login",
                FirstButton:"../Login",
                ButtonUserHome:"Register",
                SecondButton:"../Register"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("SUNNY WALK")).toBeInTheDocument()
        });
})