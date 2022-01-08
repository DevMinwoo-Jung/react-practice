import React, { useCallback, useContext } from 'react';
import { CODE, 
        CLICK_MINE, 
        OPEN_CELL, 
        TableContext, 
        NORMALIZE_CELL, 
        QUESTION_CELL, 
        FLAG_CELL  } from './mine';

        const getTdStyle = (code) => {
          switch (code) {
            case CODE.NORMAL:
            case CODE.MINE:
              return {
                background: '#444',
              };
            case CODE.CLICKED_MINE:
            case CODE.OPENED:
              return {
                background: 'white',
              };
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
              return {
                background: 'yellow',
              };
            case CODE.FLAG_MINE:
            case CODE.FLAG:
              return {
                background: 'red',
              };
            default:
              return {
                background: 'white',
              };
          }
        };

const getTdText = (code) => {
  switch(code){
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑!!';
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';      
    default:
      return code;
  }
};



const MineTd = ({rowIndex, cellIndex}) => {
  const {tableData, dispatch, halted} = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if(halted) {
      return;
    }
    switch(tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch({type: OPEN_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.MINE:
        dispatch({type: CLICK_MINE, row: rowIndex, cell: cellIndex});
        return;  
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    if(halted){
      return;
    }
    console.log('여기옴');
    switch(tableData[rowIndex][cellIndex]){
      case CODE.NORMAL:
      case CODE.MINE:
        console.log("마인");
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.FLAG_MINE:
      case CODE.FLAG:
        console.log("플래그")
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        console.log("노말");
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;  
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted])
  
  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])} 
    onClick={onClickTd}
    onContextMenu={onRightClickTd}
    >
      {getTdText(tableData[rowIndex][cellIndex])}
      
    </td>
  );
};

export default MineTd;