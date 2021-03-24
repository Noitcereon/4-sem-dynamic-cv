import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CV from './pages/CV';
import PrintableCV from "./pages/PrintableCV";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={CV}></Route>
                        <Route exact path="/pages/cv" component={CV} />
                        <Route exact path="/pages/printable_cv" component={PrintableCV} />
                    </Switch>

                    <footer>
                        <Link to="/pages/cv">Manage CV</Link>
                        <Link to="/pages/printable_cv">Show Printable Version</Link>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;