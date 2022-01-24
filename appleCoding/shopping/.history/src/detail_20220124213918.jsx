import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.scss";
let box = styled.div`
  padding: 20px;
`;
let title = styled.h4`
  font-size: 30px;
  color: ${(props) => props.color};
`;
const Detail = ({ shoes }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let { id } = useParams();
  let history = useHistory();
  let detailItem = shoes.find((detail) => {
    return (detail.id = id);
  });

  return (
    <div className="container">
      <box>
        <title>asdasd</title>
      </box>
      {showAlert === false ? null : (
        <div className="my-alert-blue">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      )}
      <p className="red">scss 테스트</p>
      <div className="row">
        <div className="col-md-6">
          <img
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${
              Number(detailItem.id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{detailItem.title}</h4>
          <p>{detailItem.content}</p>
          <p>{detailItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
