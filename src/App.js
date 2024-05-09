import React, { useState } from 'react';
import styles from "./App.module.css"
export default function App() {
  const arr = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Leopard",
    "Wolf",
    "Bear",
    "Rhino",
    "Hippo",
    "Cheetah",
    "Gorilla",
    "Kangaroo",
    "Crocodile",
    "Panther",
    "Jaguar",
    "Hyena",
    "Buffalo",
    "Puma",
    "Lynx"];
  const [data, setData] = useState("");
  const [updata, setupData] = useState([]);
  function handleChange(e) {
    e.preventDefault();
    setData(e.target.value);
    setupData(arr.filter(ele => (ele.toLowerCase()).includes(data.toLowerCase())));
  }

  return (
    <div className={styles.main}>
      <h1>SEARCH BAR</h1>
      <form>
        <input type='text' id={styles.input} onChange={handleChange} placeholder='Search here' />
      </form>
      {data.trim() === "" || data === undefined ||data.length===0? 
      <ul>
        {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul> :
        <ul>
          {updata.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>}

    </div>
  );
}