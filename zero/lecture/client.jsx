// const React = require("react");
// const ReactDom= require("react-dom");
// const WordsRelay = require('./wordsRelay');
// const NumberBaseBall = require('./numberBaseball');


import React  from "react";
import ReactDom from "react-dom";
import WordsRelay  from './wordsRelay';
import NumberBaseBall  from './numberBaseball';
import RSP from './RSP';

ReactDom.render(<RSP />, document.querySelector('#root'));

