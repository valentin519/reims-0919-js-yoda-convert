import React from "react";
import '../App.css';
import Converter from './Converter.js'


function MainPage(){
    return(
        <div className= "MainPage">
            <div className = "AsideBarre">
            </div>  

            <div className = "TittleBarre">
            </div>

            <Converter/>

        </div>
    )
}

export default MainPage;