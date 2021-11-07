//Using Use State
import React ,{useState,useEffect} from 'react'

export default function Home() {
    const [age, setAge] = useState(0);
    const [brother,setBrother]=useState(0);
    const[place,setPlace]=useState('Pune');
    const [fruit, setFruit] = useState('banana');

    return (
        <div>
            <p>Currently I am {age} Years Old  <button onClick={()=>setAge(age+1)}>+</button> </p>
            <p>I have {brother} Brother <button onClick={()=>setBrother(brother+1)}>+</button> </p>
            <p>I Was born and Brought up in {place}</p>
            <p>My favorite Fruit is {fruit}</p>
        </div>
    )
}
/*
import React, { useEffect, useState } from "react";

function Hooks() {
  // const [age, setAge] = useState(21);
  // const [siblings, setsibling] = useState(4);
  const [obj, setObj] = useState({ age: 21, siblings: 4 });
  const [count, setCount] = useState(0);

  const changeAge = () => {
    // setAge(age + 1);
    setObj((p) => {
      let age = obj.age;
      return { ...p, age: age + 1 };
    });
  };
  const changeSiblings = () => {
    // setsibling(siblings + 1);
    setObj((p) => {
      let sib = obj.siblings;
      return { ...p, siblings: sib + 1 };
    });
  };

  useEffect(() => {
    document.title = `You are ${obj.age} years old`;
  }, [obj.age]);

  return (
    <div>
      <h1>Today I am {obj.age} years old</h1>
      <h1>I've {obj.siblings} siblings</h1>
      <button onClick={changeSiblings}>More siblings</button>
      <button onClick={changeAge}>Get older</button>
      <h3>Count value is {count}</h3>
      <div className="btnCont">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Plus(+)</button>
        <button onClick={() => setCount(count - 1)}>Minus(-)</button>
      </div>
    </div>
  );
}

export default Hooks;
*/