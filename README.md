# Search Bar React Project

This repository contains a simple React project for implementing a search bar functionality.

## Project Structure

The project consists of a single file:

1. **App.js**: This file contains the functional component `App` responsible for rendering a search bar and a list of items. It utilizes React Hooks (`useState`) to manage state and filters the list of items based on the user input.

## Components

### App.js

#### Functions
- **handleChange**: This function is called when the content of the input field changes. It updates the `data` state with the new value and filters the list of items (`arr`) to find the matching items, which are then stored in the `updata` state.

#### Usage

```jsx
<App/>
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
```

#### Getting Started
- To run the project locally:

#### Clone this repository to your local machine.
- Install dependencies using npm install.
- Start the development server using npm start.
- Access the application in your browser at http://localhost:3000.

#### Technologies Used
- React
- CSS Modules

### Author
[Sharad Singh Kushwaha]
