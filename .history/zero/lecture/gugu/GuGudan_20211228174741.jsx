

const {useState, useRef} = React;
const GuGuDan = require('./GuGUDan');


const GuGuDan = () => {
        
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [showAnswer, setShowAnswer] = useState('');
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
            if(parseInt(value) === first * second){
              setResult(`정답! ${value}`);
              setFirst(Math.ceil(Math.random() * 9));
              setSecond(Math.ceil(Math.random() * 9));
              setValue('');
              inputRef.current.focus();
              setShowAnswer(``);
            } else {
              setValue('');
              setShowAnswer(`정답은 ${first * second}`);
              setResult('땡');
              inputRef.current.focus();
            }
  }

  const [count, setCount] = React.useState(0);


  return 
  <>
    <div>{first} 곱하기 {second}는?</div>
    <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} type="number"/>
        <button>입력!</button>
      </form>
      <div id="result">{result} {showAnswer}</div>
    </>
}

module.exports = GuGuDan;