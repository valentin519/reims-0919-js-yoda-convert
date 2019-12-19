import React from "react";
import '../App.css';
import Converter from './Converter.js'
import Tittle from './Tittle.js'


function MainPage(){
    return(
        <div className= "MainPage">
            <div className = "AsideBarre">
            </div>  

            <Tittle/>

            <Converter/>

        </div>
    )
}

export default MainPage;