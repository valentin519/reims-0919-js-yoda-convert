import React, {Component} from "react";
import axios from 'axios'
import '../App.css';

class BasicSyntax extends Component {
  constructor (props) {
      super(props)
      this.state={
          basicSyntax:[]
      }
      this.getBasicSyntax = this.getBasicSyntax.bind(this)
  }

  componentDidMount() {
    this.getBasicSyntax();
    }

    getBasicSyntax() {
        fetch('https://www.markdownguide.org/api/v1/basic-syntax.json',{mode: 'cors'})
        .then(res => res.json())
        .then(data =>
          this.setState({
            getBasicSyntax: data
        }))
      }

  render() {
    console.log(this.state.basicSyntax)
    return (
      <div>
        {this.state.basicSyntax.map(res=><p>name:{res.basic_syntax.name}</p>)}
      </div>
    )
  }
  
}
export default BasicSyntax
