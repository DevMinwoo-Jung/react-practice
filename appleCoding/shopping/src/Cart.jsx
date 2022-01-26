import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  let state = useSelector((state) => state)
//  let state = useSelector((state) => state.reducer)
  // redux안에 있던 모든 state를 return
  console.log(state);

  let dispatch = useDispatch();
  return (
    <>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>

        {state.reducer.map((element, index) => {
          let target = index;
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.quan}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "itemPlus", target });
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "itemMinus", target });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
      {props.alertState === true ? (
        <div className="my-laert2">
          <p>신규 가입자는 20%할인..!</p>
          <button
            onClick={() => {
              dispatch({ type: "hideAlert" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </>
  );
};

// function stateToProps(state) {
//   return {
//     state: state.reducer,
//     alertState: state.alertReducer,
//     // stroe를 state로 바꿈
//   };
// }

// export default connect(stateToProps)(Cart);

export default Cart;
