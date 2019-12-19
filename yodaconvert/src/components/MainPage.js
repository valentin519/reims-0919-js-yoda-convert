import React from "react";
import '../App.css';
import Converter from './Converter.js'
import Tittle from './Tittle.js'
import NavBar from './NavBar.js'



function MainPage(){
    return(
        <div className= "MainPage">
            <div className = "AsideBarre">
                <NavBar/>
            </div>  

            <Tittle/>

            <Converter/>

        </div>
    )
}

export default MainPage;