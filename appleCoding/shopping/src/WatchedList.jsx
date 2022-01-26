import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './watchedList.scss'

const WatchedList = (props) => {
  const itemId = [...props.itemId, 1]
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div className='watchedListDiv'>
      {itemId.map((id) => {
        return (
          <img
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
            width="100%"
          />
        );
      })}
    </div>
  );
};

export default WatchedList;
