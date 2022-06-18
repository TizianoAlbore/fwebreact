import React from 'react';
import ReactDOM from 'react-dom';
import MyMain from './js/MyMain.js';


  let menus = ["pasta","panna","prosciutto"];
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<MyMain menu={menus}/>);
  