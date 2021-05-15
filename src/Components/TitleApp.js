import React from 'react';
import { useState } from 'react';

function TitleApp() {
  const [title, setTitle] = useState("Hello M8");

  function updateTitle(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  return(
    <div className="title-app">
      <h1>{title}</h1>
      <label htmlFor="title">Enter New Title</label>
      <input type="text" name="title" id="title" onChange={updateTitle} />
    </div>
  )
}

export default TitleApp;