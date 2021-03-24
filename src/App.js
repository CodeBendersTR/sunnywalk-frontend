import "./App.css";
import { Home, Login, Main, NotFound, Profile, Register } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>

                    {/* The last routing is for "Not found"; new pages must be added before this line*/}
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
