import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CheckInPage from "./pages/check-in";
import InsightsPage from "./pages/insights";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/check-in">
                    <CheckInPage />
                </Route>
                <Route path="/insights">
                    <InsightsPage />
                </Route>
                <Route path="/">
                    <Redirect to="check-in" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


export default Router;
