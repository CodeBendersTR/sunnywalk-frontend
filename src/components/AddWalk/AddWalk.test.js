import { render, screen } from "@testing-library/react";
import { AddWalk } from "../../components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route } from 'react-router-dom'


describe('Testing UniversalDrawer', () => {
    afterEach(() => jest.clearAllMocks())
        test("Check Record your sunny walk renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("Record your sunny walk")).toBeInTheDocument()
        });
        test("Check Location renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("Location")).toBeInTheDocument()
        });
        test("Check Sunny Walk renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("Record your sunny walk")).toBeInTheDocument()
        });
        test("Check 1 Star renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("1 Star")).toBeInTheDocument()
        });
        test("Check 2 Stars renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("2 Stars")).toBeInTheDocument()
        });
        test("Check 3 Stars renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("3 Stars")).toBeInTheDocument()
        });
        test("Check 4 Stars renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("4 Stars")).toBeInTheDocument()
        });
        test("Check 5 Stars renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("5 Stars")).toBeInTheDocument()
        });
        test("Check Empty renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("Empty")).toBeInTheDocument()
        });
        test("Check Add Walk renders", () => {
            let location = {};
            location.name = "London";
            location.lat = 51.499196546877556;
            location.lng = -0.07757697211526285;
            
            render(<AddWalk location={location}/>);
            expect(screen.getByText("Add Walk")).toBeInTheDocument()
        });
      
})

/*
Walk time
Location
 1 Star
  2 Stars
   3 Stars
     4 Stars
      5 Stars
      Empty
      Add Walk
*/