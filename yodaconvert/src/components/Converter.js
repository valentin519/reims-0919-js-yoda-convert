import React, {Component} from "react";
import '../App.css';
import convertToHTML from 'markdown-to-html-converter' //npm install markdown-to-html-converter
import ButtonConvDel from './Button.jsx';
const MarkdownIt = require('markdown-it'), md = new MarkdownIt();


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



  showOutPut(){
    this.setState({
      outputText : md.render(this.state.inputText)
    })
  }

  countWords() {
    let countWord =(/";|#;|-;|/g,'')
  }
    
  render () {
    return (
        <div className="textContainer">
            
            <textarea className="input-text" name="inputText" rows="6" cols="40" value={this.state.inputText} onChange={this.handleInputChange}>    
            </textarea>
            <ButtonConvDel convert={this.showOutPut} delet = {this.handleInputChange } />
            <textarea className="output-text" name="outputText" rows="6" cols="40" value={this.state.outputText} readonly >    
            </textarea>
            
        </div>
    )
}}

export default Converter;
