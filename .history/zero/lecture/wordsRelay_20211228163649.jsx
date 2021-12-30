const React = require('react');
const { Component } = React;

class WordsRelay extends Component { 
  state = {
    text: '안녕',
  };

  render() {
    return <><h1>{this.state.text}</h1></>
  }
}

module.exports = WordsRelay;