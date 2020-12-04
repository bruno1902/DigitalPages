import React from "react";
import { Route, Switch } from "react-router-dom";
import App from './App';
import Info from './Object/Content-Click/Info';

export const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={App} />
            <Route path="/info" component={Info} />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    )
}
