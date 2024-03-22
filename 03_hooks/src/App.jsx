import React, { useState } from "react";


function App() {
  let [counter, setCounter] = useState(1);


  let addValue = function() {
    if (counter < 10 ) {
    setCounter(counter + 1); 
    } 
  };


  let removeValue = function() {
    if (counter > 0) {
      setCounter(counter - 1);
    } 
  };


  let valueMulti = () => {
    setCounter(counter * 2);
  };


  let valuedivide = () => {
    setCounter(counter / 2);
  };


  let valueClear = () => {
    setCounter(0);
  };


  return (
    <>
      <h1> Gohil Utsav Ashokbhai | App.jsx </h1>
      <h2> Counter value : {counter} </h2>

      <button onClick={addValue}>Add value : {counter}</button> <br /><br />
      <button onClick={removeValue}>remove value : {counter}</button> <br /><br />
      <button onClick={valueMulti}>Value MultiPly</button> <br /><br />
      <button onClick={valuedivide}>Value Divide</button> <br /><br />
      <button onClick={() => { setCounter(counter ** 2) }}>Value squre</button> <br /><br />
      <button onClick={valueClear}>Clear</button> <br /><br />

      <p>Added value is {counter}</p>
      <p>removed value is {counter}</p>

      <button onClick={removeValue}>-</button>
      <span>{counter}</span>
      <button onClick={addValue}>+</button>
   
    </>
  );
}

export default App;
