import React from "react";
import "./watchedList.scss";

const WatchedList = (props) => {
  return (
    <div className="watchedListDiv">
          <img
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${
              Number(props.id) + 1
            }.jpg`}
            width="100%"
            key={props.id}
          />
    </div>
  );
};

export default WatchedList;
