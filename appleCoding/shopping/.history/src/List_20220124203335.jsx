import React from "react";

const List = ({data}) => {

  return (
    <div className="col-md-4">
      <img
        alt=""
        src={`https://codingapple1.github.io/shop/shoes${data.id+1}.jpg`}
        width="100%"
      />
      <h4>상품명: {data.title}</h4>
      <p>상품설명: {data.content} 가격: {data.price}</p>
    </div>
  );
};

export default List;
