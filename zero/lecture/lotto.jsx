import React, { useRef, useState, useEffect, useMemo, useCallback} from 'react';
import Ball from'./ball';

function getWinNumbers(){
  console.log("반복 실행됨? 되면 안됨;")
  const candidate = Array(45).fill().map((v,i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonumsNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a,b) => a - b);
  return [...winNumbers, bonumsNumber];
}

const Lotto = () => {
  const lottoNmbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers,setWinNumbers] = useState(lottoNmbers);  
  const [winBalls ,setWinBalls] = useState([]);
  const [bonus ,setBonus] = useState(null);
  const [redo ,setRedo] = useState(false); 
  const timeouts = useRef([]); 

  useEffect(() => {
    console.log('useEffect');
    for(let i = 0; i < winNumbers.length - 1; i++){
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevState) => [...prevState, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); 
  // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidupdate 둘 다 수행

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  },[winNumbers])

  return (
    <>
    <div>당첨 숫자</div>
    <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}     
    </div>
    <div>보너스!</div>
    {bonus && <Ball number={bonus}/>}
    {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;