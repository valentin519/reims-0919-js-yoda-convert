import React, {Component} from "react";
import '../App.css';
import convertToHTML from 'markdown-to-html-converter' //npm install markdown-to-html-converter
import ButtonConvDel from './Button.jsx';


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
    const newText = e.target.value
    this.setState({ 
      inputText: newText,
      outputText : convertToHTML(newText)
    })
  }
    
render () {
    console.log(this.state)
    return (
        <div className="textContainer">
            
            <textarea className="input-text" name="inputText" rows="6" cols="40" value={this.state.inputText} onChange={this.handleInputChange}>    
            </textarea>
            <ButtonConvDel/>
            <textarea className="output-text" name="outputText" rows="6" cols="40" value={this.state.outputText} readonly >    
            </textarea>
            
        </div>
    )
}}

export default Components;
