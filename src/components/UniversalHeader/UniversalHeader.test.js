import { render, screen } from "@testing-library/react";
import { UniversalHeader } from "../../components";
import "@testing-library/jest-dom/extend-expect";


describe('Testing UniversalHeader', () => {
    afterEach(() => jest.clearAllMocks())
        test("Check Main Button renders", () => {
            const requiredProps={
                ButtonMain:"Main",
                ButtonLogin:"Login", 
                ButtonRegister:"Register",
                ButtonProfile:"Profile"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Main")).toBeInTheDocument()
        });
        test("Check Login Button renders", () => {
            const requiredProps={
                ButtonMain:"Main",
                ButtonLogin:"Login", 
                ButtonRegister:"Register",
                ButtonProfile:"Profile"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Login")).toBeInTheDocument()
        });
        test("Check Register Button renders", () => {
            const requiredProps={
                ButtonMain:"Main",
                ButtonLogin:"Login", 
                ButtonRegister:"Register",
                ButtonProfile:"Profile"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Register")).toBeInTheDocument()
        });
        test("Check Profile Button renders", () => {
            const requiredProps={
                ButtonMain:"Main",
                ButtonLogin:"Login", 
                ButtonRegister:"Register",
                ButtonProfile:"Profile"
            }
            render(<UniversalHeader {...requiredProps}/>);
            expect(screen.getByText("Profile")).toBeInTheDocument()
        });
})