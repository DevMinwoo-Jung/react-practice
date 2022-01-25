import React from 'react';

const Stock = ({stock, id}) => {
  return (
    <>
      <p>재고: {stock[id]}</p> 
    </>
  );
};

export default Stock;