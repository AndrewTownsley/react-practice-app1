import './App.css';
import React from 'react';
import { useState } from 'react';


function TitleApp() {
  const [title, setTitle] = useState("Hello M8");
  const [theme, setTheme] = useState("purple");

  function updateTitle(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function updateTheme(event) {
    console.log(event.target.value);
    setTheme(event.target.value);
  }

  return(
    <div className="App">
      <header className="App-header" style={{backgroundColor: theme}}>
      <h1>{title}</h1>
      <label htmlFor="title">Enter New Title</label>
      <input type="text" name="title" id="title" onChange={updateTitle} />
      <hr/>
      <label htmlFor="Theme Color"></label>
        <select name="theme" id="theme" onChange={updateTheme}>
          <option value="lime">Lime Green</option>
          <option value="darkgray">Dark Gray</option>
          <option value="darkred">Dark Red</option>
          <option value="black">Black</option>
          <option value="coral">Coral</option>
        </select>
      </header>
    </div>
  )
}

export default TitleApp;