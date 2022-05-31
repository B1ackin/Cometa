import React from 'react';
import './App.css';
import {Header} from "./main_page/header/Header";
import {Footer} from "./main_page/footer/Footer";
import {Route, Switch} from "react-router-dom";
import {Authorization} from "./authorization_page/Login";
import {HomePage} from "./HomePage";
import {Registration} from "./registration_page/Registration";
import {About} from "./about_project/About";

function App() {
    return (

        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/login' component={Authorization}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/about' component={About}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
