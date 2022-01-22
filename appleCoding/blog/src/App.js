import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "정민우 드디어 취업!!",
    "정민우 드디어 정신차림!",
    "연봉은 3천이상으로 밝혀져...!",
  ]);

  let [like, setLike] = useState(0);

  function goLike(){
    setLike(like + 1);
  }

  function goChangeTitle(){
    const newTitle = [...title];
    newTitle[0] = '코딩좀 하자..!';
    setTitle(newTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title[0]} <span onClick={goLike}>👍</span>{like}</h3>
        <p>1월 21일</p>
        <button onClick={goChangeTitle}>바꾸기</button>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>1월 22일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>1월 23일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
