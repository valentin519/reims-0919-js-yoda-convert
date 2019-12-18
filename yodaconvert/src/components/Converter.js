import React, {Component} from "react";
import './App.css';


class Components extends Component {
    constructor (props) {
        super(props)
        this.state={}
    }
render () {
    return (
        <div className="textContainer">
            <textarea className="input-text" rows="6" cols="40"></textarea>
            <textarea className="output-text" rows="6" cols="40"></textarea>
        </div>
    )
}}




export default Components;