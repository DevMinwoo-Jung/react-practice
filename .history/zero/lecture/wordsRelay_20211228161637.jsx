const { Component } = React;
class WordsRelay extends React.Component { 
  state ={
    text: "안녕",
  }

  render(){
    return <h1>{this.state.text}</h1>
  }
}