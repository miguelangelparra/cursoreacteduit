import React, { Component } from "react";

var Inputs =[{}]
class Form extends Component {
  render() {
    return (
      <form>
{Inputs.map((inp)=><Input />)}
      </form>
    );
  }
}

class Input extends Component {
  render() {
    return (<input placeholder={this.props.pHolder}/>);
  }
}
export default Form;
