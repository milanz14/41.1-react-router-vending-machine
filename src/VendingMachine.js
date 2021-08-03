import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Drinks from "./Drinks";
import Chips from "./Chips";
import Chocolates from "./Chocolates";
import VendingHome from "./VendingHome";
import Navbar from "./Navbar";

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route exact path="/drinks">
                    <Drinks />
                </Route>
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/chocolates">
                    <Chocolates />
                </Route>
            </BrowserRouter>
        </div>
    );
};

export default VendingMachine;
