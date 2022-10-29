import React, { ChangeEvent, FC, FormEvent, FunctionComponent,MouseEvent , Component} from 'react';
import { useState, useCallback, useRef } from 'react';



//리액트는 commonjs모듈이다 
//  export = React 이기때문
//export as namespace React;까지있으니 umd모듈이다
//import * as React from 'react';
//import React=require('react') 이런식으로 import해야하는데
//tsconfig에서 "esModuleInterop": true, 로되있어서
//  import React from 'react';이렇게import해도됨

interface P{
name:string,
title:string,  
}
//FC=FunctionComponent
const WordRelay:FC<P> = (props) => {
  // props.name
    const [word, setWord] = useState('seomon');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    /////////////////////////////////////////////////////
    //null을 넣어야 html ref로작동함
    const inputEl = useRef<HTMLInputElement>(null);
///////////////////////////////////////////////////////
    const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl.current;
        if (word[word.length - 1] === value[0]) {
          setResult('딩동댕');
          setWord(value);
          setValue('');
          if (input) {
            input.focus();
          }
        } else {
          setResult('땡');
          setValue('');
          if (input) {
            input.focus();
          }
        }
    }, [word, value]);


    // const clickclick=useCallback((e:MouseEvent<HTMLButtonElement>)=>{

    // },[])

    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value) 
    }, []);
//ts가 jsx,tsx를 인식을 못하는데 인식하게해줄려면tsconfig가서 jsx부분을 "jsx": "preserve", 에서 "jsx": "react",로고쳐줘야함
    return (
        <>
          <div>{word}</div>
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputEl}
              value={value}
              onChange={onChange}
            />
            <button>입력!</button>
          </form>
          <div>{result}</div>
        </>
      );
};

export default WordRelay;