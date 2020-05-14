import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import AboutPage from "../view/AboutPage";
import HomePage from "../view/HomePage";
import LoginPage from "../view/LoginPage";
import RegisterPage from "../view/RegisterPage";
import UserPage from "../view/UserPage";

function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/user">
                    <UserPage/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Index;
