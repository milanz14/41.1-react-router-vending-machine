import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Drinks from "./Drinks";
import Chips from "./Chips";
import Chocolates from "./Chocolates";

const VendingHome = () => {
    return (
        <div>
            <h1>THIS IS VendingHome</h1>
            <Switch>
                <Route exact path="/">
                    <VendingHome />
                </Route>
                <Route exact path="/drinks">
                    <Drinks />
                </Route>
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/chocolates">
                    <Chocolates />
                </Route>
            </Switch>
        </div>
    );
};

export default VendingHome;
