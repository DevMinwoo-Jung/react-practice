import React from 'react';
import Td from './td';

const Tr = ({rowData, rowIndex, dispatch}) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (<Td cellData={rowData[i]} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i}>{''}</Td>))}
    </tr>
  );
};

export default Tr;