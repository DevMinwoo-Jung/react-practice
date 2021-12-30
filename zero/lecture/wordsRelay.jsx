const React = require('react');
const { useState, useRef } = React;


const WordsRelay = () => { 
    const [word, setWord] = useState('1월안에 취업하는 킹멋쟁이정민우');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const input = useRef('');
  onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]){
        setResult('딩동댕');
        setWord(value);
        setValue('');
      input.current.focus();
    } else {
        setResult("땡");
        setValue('');
      input.current.focus();
    }
  };

  onChagneInput = (e) => {
    setValue(e.target.value);
  };

  onRefInput = (c) => {
    setInput = c;
  }
    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="wordInput"></label>
          <input id="wordInput" ref={input} value={value} onChange={onChagneInput}/>
          <button className={"클래스입니다"}>입력</button>
        </form>
        <div>{result}</div>
      </>
    )
}

module.exports = WordsRelay;