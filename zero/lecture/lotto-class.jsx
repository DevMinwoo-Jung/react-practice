import React, { Component } from 'react';
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

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, //보너스 공
    redo: false,
  };
  timeouts = [];


  runTimeouts = () => {
    const {winNumbers} = this.state;
    for(let i = 0; i < this.state.winNumbers.length - 1; i++){
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          }
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000)
  }


  componentWillUnmount() {
    console.log("willUnmount");
    this.timeouts.forEach((t) => {
      clearTimeout(t);
    });
  }

  
  componentDidMount(){
    console.log("componentDidMount");
    this.runTimeouts();
  }

  componentDidUpdate(prevProps, prevState){
    console.log('didUpdate');
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
    if (prevState.winNumbers !== this.state.winNumbers) {
      console.log('로또 숫자를 생성합니다.');
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, //보너스 공
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const {winBalls, bonus, redo} = this.state;
    return (
      <>
      <div>당첨 숫자</div>
      <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}     
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus}/>}
      {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  }
}

export default Lotto;