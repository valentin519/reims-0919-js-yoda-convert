import React, {Component} from "react";
import '../App.css';
import ButtonConvDel from './Button.jsx';
const MarkdownIt = require('markdown-it'), md = new MarkdownIt();//npm install markdown-it --save
var hljs = require('highlight.js') //npm install highlight.js


class Converter extends Component {
    constructor (props) {
        super(props)
        this.state={
            inputText:'',
            outputText:'',
            counter: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showOutPut = this.showOutPut.bind(this);
    }


  handleInputChange(e) {
    const newText = e.target.value
    const htmlTexte = ""
    this.setState({ 
      inputText: newText,
      outputText: htmlTexte,
    })
  }

  //hljs.highlightAuto().value

  showOutPut(){
    this.setState({
      outputText :md.render(this.state.inputText)

  })}

  highlightedCode(e) {
    return hljs.highlightAuto(e).value
   

  }

  countWords() {
    {
      let table = this.state.inputText.split(/[.|,|?|!|;|#|*|-|' ']/g)
      let count = table.length 
      this.setState({
        counter: count,
      })  
    }
  }
    
  render () {
    return (
        <div className="textContainer">
            
            <textarea className="input-text" name="inputText" rows="6" cols="40" resize='none' value={this.state.inputText} onChange={this.handleInputChange}>    
            </textarea>
            <ButtonConvDel convert={this.showOutPut} delet = {this.handleInputChange } />
            <textarea className="output-text" name="outputText" rows="6" cols="40" resize='none' value={this.state.outputText} readonly >    
            test
            </textarea>
            <button >test
            </button>
            {hljs.highlight('html', '<span>Hello World!</span>').value}
        </div>
    )
}}

export default Converter;
