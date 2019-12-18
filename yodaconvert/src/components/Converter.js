import React, {Component} from "react";
import '../App.css';
import convertToHTML from 'markdown-to-html-converter' //npm install markdown-to-html-converter

class Components extends Component {
    constructor (props) {
        super(props)
        this.state={
            inputText:'',
            outputText:''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }


handleInputChange(e) {
    this.setState({ 
        inputText: e.target.value,
        outputText : convertToHTML(this.state.inputText) })
      }
    
render () {
    console.log(this.state)
    return (
        <div className="textContainer">
            
            <textarea className="input-text" name="inputText" rows="6" cols="40" value={this.state.inputText} onChange={this.handleInputChange}>    
            </textarea>
            <textarea className="output-text" name="outputText" rows="6" cols="40" value={this.state.outputText} onChange={this.handleInputChange} >    
            </textarea>
             
        </div>
    )
}}

export default Components;
