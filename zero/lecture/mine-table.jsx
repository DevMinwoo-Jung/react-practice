import React, {memo, useContext} from 'react';
import { TableContext } from './mine';
import MineTr from './mine-tr';

const MineTable = memo(() => {
  const {tableData} = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length).fill().map((tr,i) => <MineTr rowIndex={i}/>)}
    </table>
  );
});

export default MineTable;