import { useState } from "react";
import "./App.css";
import List from "./list";

function App() {
  let [title, setTitle] = useState([
    "정민우 드디어 취업!!",
    "정민우 드디어 정신차림!",
    "연봉은 3천이상으로 밝혀져...!",
  ]);

  let [userInput, setUserInput] = useState("");

  function goChangeTitle(index) {
    const newTitle = [...title];
    newTitle[index] = "코딩 공부좀 하자..!";
    setTitle(newTitle);
  }

  function goSetInput(e) {
    setUserInput(e.target.value);
  }

  function goSetTitle(e) {
    e.preventDefault();
    const newTitle = [...title];
    newTitle.unshift(userInput);
    console.log(newTitle);
    setTitle(newTitle);
    setUserInput("");
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {title.map((title, index) => (
        <List
          title={title}
          goChangeTitle={goChangeTitle}
          key={index}
          index={index}
        />
      ))}
      <form onSubmit={goSetTitle}>
        <div className="publish">
          <input onChange={goSetInput} />
          <button>저장</button>
        </div>
      </form>
    </div>
  );
}

export default App;
