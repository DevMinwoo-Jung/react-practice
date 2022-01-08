// const React = require("react");
// const ReactDom= require("react-dom");
// const WordsRelay = require('./wordsRelay');
// const NumberBaseBall = require('./numberBaseball');


import React  from "react";
import ReactDom from "react-dom";
import WordsRelay  from './wordsRelay';
import NumberBaseBall  from './numberBaseball';
import RSP from './RSP';
import Lotto from './lotto';
import Tictaetoe from './tictaetoc';
import Mine from './mine';

ReactDom.render(<Mine />, document.querySelector('#root'));

