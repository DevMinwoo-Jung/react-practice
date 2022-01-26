import "./App.css";
import ShopNavbar from "./navbar";
import Data from "./data";
import React, { useEffect, useState, lazy, Suspense } from "react";
import List from "./List";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./detail";
import Loading from "./Loading";
import axios from "axios";
import Cart from "./Cart";
import WatchedList from "./WatchedList";

export let stockContext = React.createContext();
// 같은 변수값을 공유할 범위 생성

function App() {
  const [shoes, setShoes] = useState(Data);
  const [moreShoes, setMoreShores] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stock, setStock] = useState([10, 11, 12]);

  let Detail = lazy(() => import("./detail.jsx"));

  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  function getAxios() {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => setMoreShores(result.data))

      .catch(() => console.log("쉴패"));
  }

  // 위는 개구림 밑처럼 하자!
  function answerGetAxios() {
    setLoading(true);
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then(setLoading(true))
      .then((result) => setShoes([...shoes, ...result.data]))
      .then(setLoading(false))
      .catch(() => console.log("쉴패"));
  }

  function minusItemStock(target) {
    console.log(target);
    const newStock = [...stock];
    newStock[target] > 0
      ? (newStock[target] = newStock[target] - 1)
      : (newStock[target] = 0);
    setStock(newStock);
  }

  function addAge() {
    setCount(count++);
  }

  useEffect(() => {
    if (count !== 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);

  return (
    <div className="App">
      <ShopNavbar />
      <Route exact path="/">
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
          <stockContext.Provider value={stock}>
            {/* 값 공유를 원하는 HTML들을 <범위.Provider>로 감싸고 value={공유를 원하는 값} */}
            <div className="row">
              {shoes.map((data) => (
                <List data={data} key={data.id} stockContext={stockContext} />
              ))}
            </div>
          </stockContext.Provider>
          {loading === true ? <Loading /> : null}
          <div className="row">
            {moreShoes === null
              ? ""
              : moreShoes.map((data) => <List data={data} key={data.id} />)}
          </div>

          <button className="btn btn-primary" onClick={answerGetAxios}>
            더보기
          </button>
        </div>
      </Route>

      <Switch>
        <Route path="/detail/:id">
          <stockContext.Provider value={stock}>
            <Suspense fallback={<div>로딩중이에용</div>}>
              <Detail
                shoes={shoes}
                stock={stock}
                minusItemStock={minusItemStock}
              />
            </Suspense>
          </stockContext.Provider>
        </Route>
        {/* :id 아무 문자나 받겠다는 URL 작명법 */}
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/:id">
          <div>아무거나..?</div>
        </Route>
      </Switch>
      {/* <div>
        <div>안녕하십니까 전 {age}</div>
        <button onClick={addAge}>누르면한살먹기</button>
      </div> */}
    </div>
  );
}

export default App;
