import React, { useEffect, useMemo, useState } from "react";
import "./watchedList.scss";

const WatchedList = (props) => {
  let getLocalStorage = useMemo(Array,[]);
  const [itemId, setItemId] = useState([...getLocalStorage]);
  console.log(itemId);
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      if(getLocalStorage.indexOf(i)){
        // const removeItem = getLocalStorage.indexOf(i);
        // getLocalStorage.splice(removeItem, 1);
        localStorage.removeItem(`item${i}`);
        getLocalStorage.push(JSON.parse(localStorage.getItem(`item${i + 1}`)));
      } 
      getLocalStorage.push(JSON.parse(localStorage.getItem(`item${i + 1}`)));
    }
    setItemId(Object.keys(getLocalStorage).map((index) => index));
  }, [getLocalStorage]);
  console.log(itemId);

  // console.log(JSON.parse(localStorage))
  // console.log((Object.keys(getLocalStorage).map((index) => index)));


  return (
    <div className="watchedListDiv">
      {itemId.map((id) => {
        return (
          <img
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
            key={id}
          />
        );
      })}
    </div>
  );
};

export default WatchedList;
