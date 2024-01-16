import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'

function Add() {
  const [list, setList] = useState([]);
  
  function log() {
    const todoInputValue = document.getElementById("todo_input").value;
    if (todoInputValue) {
      setList(prevList => [...prevList, todoInputValue]);
    }
  }
  function cross(index){
    if (document.getElementById("cross" + index).style.backgroundColor == "green"){
      document.getElementById("cross" + index).style.backgroundColor = "red";
    } else {
      document.getElementById("cross" + index).style.backgroundColor = "green";    
    }
  }

  function remove(index){
    document.getElementById("remove" + index).remove();
    document.getElementById("cross" + index).remove();
  }

  return (
    <div>
      <input type="text" id="todo_input" placeholder="Your todo item" />
      <button id="add-button" onClick={() => log()}>add</button><br />
        {list.map((item, index) => (
          <div>
            <button id={"cross" + index} onClick={() => cross(index)}>{item}</button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button id={"remove" + index} onClick={() => remove(index)}>Delete</button>
            
            <br />
          </div>
        ))}
    </div>
  );
}

export default Add;

