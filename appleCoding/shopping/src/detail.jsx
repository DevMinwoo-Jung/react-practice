import React, { useState, useEffect, useContext } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { stockContext } from "./App";
import "./detail.scss";
import Stock from "./Stock";
import { CSSTransition } from "react-transition-group";
import { connect, useDispatch } from "react-redux";
import WatchedList from "./WatchedList";

// let box = styled.div`
//   padding: 20px;
// `;
// let title = styled.h4`
//   font-size: 30px;
//   color: ${(props) => props.color};
// `;
const Detail = (props) => {
  const [showAlert, setShowAlert] = useState(true);
  const [inputData, setInputData] = useState("");
  const [tab, setTab] = useState(0);
  const [tabswitch, setTabSwitch] = useState(false);
  let stocks = useContext(stockContext);
  let arr = localStorage.getItem("watched");

  let { id } = useParams();
  let history = useHistory();
  let detailItem = props.shoes.find((detail) => {
    return (detail.id = id);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    var arr = localStorage.getItem("watched");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    arr.push(id);
    new Set(arr);
    arr = [...arr];
    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  function goMinusItemStock(target) {
    target = id;
    props.minusItemStock(target);
  }

  const dispatch = useDispatch();

  return (
    <div className="container">
      <box>
        <title>asdasd</title>
      </box>
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
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
          <button
            className="btn btn-danger"
            onClick={() => {
              props.dispatch({
                type: "addItem",
                payload: { id: detailItem.id, name: detailItem.title, quan: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <Stock stock={props.stock} id={id}></Stock>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  setTab(0);
                  setTabSwitch(false);
                }}
              >
                Option 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setTabSwitch(false);
                  setTab(1);
                }}
              >
                Option 2
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setTabSwitch(false);
                  setTab(2);
                }}
              >
                Option 3
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {
            arr.map((ele) => <WatchedList id={ele} />)
          }
          <CSSTransition in={true} classNames="wow" timeout={500}>
            <TabContent tab={tab} setTabSwitch={setTabSwitch} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

function TabContent({ tab, setTabSwitch }) {
  useEffect(() => {
    setTabSwitch(true);
  });

  if (tab === 0) {
    return <div>0번쨰 div</div>;
  }
  if (tab === 1) {
    return <div>1번쨰 div</div>;
  }
  if (tab === 2) {
    return <div>2번쨰 div</div>;
  }
}

function stateToProps(state) {
  return {
    state: state.reducer,
    alertState: state.alertReducer,
  };
}

export default connect(stateToProps)(Detail);

// export default Detail;
