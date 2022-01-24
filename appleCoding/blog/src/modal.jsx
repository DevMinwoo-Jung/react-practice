import React from 'react';

const Modal = ({title, onClose}) => {

  function setOnClose(){
    onClose();
  }

  return (
    <div className='modal'>
    <h2>제목: {title}</h2>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={setOnClose}>닫기</button>
  </div>
  );
};

export default Modal;