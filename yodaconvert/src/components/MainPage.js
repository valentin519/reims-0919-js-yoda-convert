import React from "react";
import '../App.css';
import Converter from './Converter.js'
import NavBar from './NavBar.js'


function MainPage(){
    return(
        <div className= "MainPage">
            <div className = "AsideBarre">
                <NavBar/>
            </div>  

            <div className = "TittleBarre">
            </div>

            <Converter/>

        </div>
    )
}

export default MainPage;