import React, { memo, useContext } from "react";
import { useHistory } from 'react-router-dom';

const List = memo(({data, stockContext}) => {

  let stocks = useContext(stockContext);
  let history = useHistory();
  
  function addItemToLocalStorage(){
    localStorage.setItem(`item${data.id}`, JSON.stringify({item: data.id}));
  }


  return (
    <div className="col-md-4" onClick={() => {history.push(`/detail/${data.id}`)}}>
      <img
        alt=""
        src={`https://codingapple1.github.io/shop/shoes${Number(data.id)+1}.jpg`}
        width="100%"
        onClick={addItemToLocalStorage}
      />
      <h4>상품명: {data.title}</h4>
      <p>상품설명: {data.content} 가격: {data.price}</p>
      <p>재고 {stocks[data.id]}</p>
    </div>
  );
});

export default List;
