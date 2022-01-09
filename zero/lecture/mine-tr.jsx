import React, { memo, useContext } from 'react';
import { TableContext } from './mine';
import MineTd from './mine-td';

const MineTr = memo(({rowIndex}) => {
  const {tableData} = useContext(TableContext);
  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill().map((td,i) => <MineTd rowIndex={rowIndex} cellIndex={i}/>)}
    </tr>
  );
});

export default MineTr;