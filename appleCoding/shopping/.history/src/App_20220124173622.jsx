

import "./App.css";
import ShopNavbar from './navbar';
import Data from "./data";
import { useState } from "react";
import List from './List';
import {Link, Route, Switch} from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <ShopNavbar/>
      <div className="jumbo">
        <div className="background">
          <h1>20% Season Off</h1>
          <p>싸다싸</p>
          <p>
            <button>더 보기</button>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            shoes.map(data => <List data={data} key={data.id}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
