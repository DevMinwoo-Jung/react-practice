import React, { memo, useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const List = memo(({data, stockContext}) => {

  let stocks = useContext(stockContext);
  let history = useHistory();
  const [itemList, setItemList] = useState([JSON.parse(localStorage.getItem('item'))]);
  
  console.log([JSON.parse(localStorage.getItem('item'))])

  useEffect(() => {
    setItemList([JSON.parse(localStorage.getItem('item'))]);
    console.log(itemList);
  },[])

  function addItemToLocalStorage(){
    localStorage.setItem(`item`, JSON.stringify({item: itemList.push(data.id)}));
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
