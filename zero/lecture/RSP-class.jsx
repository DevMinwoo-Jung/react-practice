import React, {Component} from 'react';

// 클래스의 경우 -> constructor -> rendering -> ref -> componentDidMount 
// -> (setState/props 바뀔 때 -> sholdComponentUpdate -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const repCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

// const computerChoice = (imgCoord) => {
//   return Object.entries(repCoords).find((v) => {
//     v[1] === imgCoord;
//   })[0];
// };

const computerChoice = (imgCoord) => {
  return Object.entries(repCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};


class RSP extends Component {
  state = {
    result: '',
    imgCoord: repCoords.바위,
    score: 0,
  };

  interval;

  // 첫 render에서만 실행되는것, 보통 비동기 요청 많이 함
  componentDidMount(){
    //const {imgCoord} = this.state; // -142px 여기다가 쓰면 클로저 문제 발생!
    this.interval = setInterval(this.changeHand, 1000);
  }

  // 리렌더링 후
  componentDidUpdate(){

  }

  // 컴포넌트 제거되기 직전, 비동기 요청 정리를 많이 함
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  changeHand = () => {
      const {imgCoord} = this.state; // -142px
      if(imgCoord === repCoords.바위){
        this.setState({
          imgCoord: repCoords.가위,
        });
      } else if(imgCoord === repCoords.가위){
        this.setState({
          imgCoord: repCoords.보,
        });
      } else if(imgCoord === repCoords.보){
        this.setState({
          imgCoord: repCoords.바위,
        });
      }
  }

  onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render(){
    const {result, score, imgCoord} = this.state;
    return (
      <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
        <div>
        <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}

export default RSP;