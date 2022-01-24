import React, { useState } from "react";
import Modal from './modal';

const List = ({ title, goChangeTitle, index }) => {
  let [like, setLike] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function goLike() {
    setLike(like + 1);
  }

  function setChangeTitle() {
    goChangeTitle(index);
  }

  function goShowModal() {
    setShowModal(true);
  }

  function goOnClose() {
    setShowModal(false);
  }

  return (
    <div className="list">
      <h3>
        {title} <span onClick={goLike}>👍</span>
        {like}
      </h3>
      <p>1월 21일</p>
      <button onClick={setChangeTitle}>바꾸기</button>
      <button onClick={goShowModal}>상세 페이지</button>
      <hr />
      { showModal === true ? <Modal title={title} onClose={goOnClose}/> : null }
    </div>
    
  );
};

export default List;
