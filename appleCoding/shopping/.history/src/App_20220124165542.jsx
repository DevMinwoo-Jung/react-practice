import { useState } from 'react';

import "./App.css";
import Data from './data';
import ShopNavbar from './navbar';

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
          <div className="col-md-4">
            <img alt ="" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img alt ="" src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img alt ="" src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
