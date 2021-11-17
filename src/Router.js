import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import SignInForm from "./pages/SignInPage/SignInForm";
import AddAdvertisementPage from "./pages/AddAdvertisementPage/AddAdvertisementPage";



const Router = () => {
    return <BrowserRouter>
    <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route exact path = "/SignUp" component = {SignUpForm} />
        <Route exact path = "/SignIn" component = {SignInForm} />
        <Route exact path = "/AddAdvertisement" component = {AddAdvertisementPage} />               
    </Switch>
    </BrowserRouter>
}

export default Router;