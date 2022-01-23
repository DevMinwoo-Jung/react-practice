import { useState } from "react";
import "./App.css";
import Modal from './modal';

function App() {
  let [title, setTitle] = useState([
    "정민우 드디어 취업!!",
    "정민우 드디어 정신차림!",
    "연봉은 3천이상으로 밝혀져...!",
  ]);

  let [like, setLike] = useState(0);

  const [showModal, setShowModal] = useState(false);

  function goLike(){
    setLike(like + 1);
  }

  function goChangeTitle(){
    const newTitle = [...title];
    newTitle[0] = '코딩 공부좀 하자..!';
    setTitle(newTitle);
  }

  function goShowModal(){
    setShowModal(true);
  }

  function goOnClose(){
    setShowModal(false);
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
        <h3 onClick={goShowModal}>{title[2]}</h3>
        <p>1월 23일</p>
        <hr />
      </div>
      { showModal === true ? <Modal onClose={goOnClose}/> : null }
    </div>
  );
}

export default App;
