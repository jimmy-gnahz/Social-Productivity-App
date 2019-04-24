import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import NewTask from "./New Task/NewTask";

const Router = () => (
    <BrowserRouter> 
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/NewTask" component={NewTask} />
        </Switch>
    </BrowserRouter>
);

export default Router;