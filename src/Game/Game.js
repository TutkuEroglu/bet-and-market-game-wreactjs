import React from 'react'
import Sirket from "../Borsa/Sirket";
import Iddaa from "../Iddaa/Iddaa";
import { useSelector } from "react-redux";
import './Game.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Game() {

    const counter = useSelector(state => state.Money);


    return (
    <>
        <div className="">
            <div className="Money">
                Bakiyen : {counter}  <br/>
                <a href="/">Sirket</a> <a href="/Iddaa">Iddaa</a> 
            </div>
                
        </div>

        <Router>
            <Route path="/" exact render={(props) => <Iddaa />} />
            <Route path="/Sirket" render={(props) => <Sirket />} />
        </Router>
    </>
    )
}

export default Game
