import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CV from './CV';
import PrintableCV from "./PrintableCV";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={CV} />
                        <Route path="/printable_cv" component={PrintableCV} />
                    </Switch>

                    <footer>
                        <Link to="/">Manage CV</Link>
                        <Link to="/printable_cv">Show Printable Version</Link>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;