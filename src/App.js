import React from 'react'
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

export default App;

{   //<Route path='Login' render={() => (<Login />)} />
    //<Route path='Home' render={() => (<Home />)} />
    //<Route path='ContactUs' render={() => (<ContactUs />)} />
    //<Route path='Market' render={() => (<Market />)} />
}