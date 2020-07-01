import React from 'react';
import './App.css';

//components
import InputUser from "./components/InputUser";
import ListUsers from "./components/ListUsers";

function App() {
  return (
      <div>
        <InputUser/>
        <ListUsers/>
      </div>
  );
}

export default App;
