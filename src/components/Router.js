import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import NewTask from "./NewTask"

const Router = () => (
    <BrowserRouter> 
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/new task" component={NewTask} />
        </Switch>
    </BrowserRouter>
);

export default Router;