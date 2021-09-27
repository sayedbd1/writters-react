
import { useEffect, useState } from 'react';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Header from './components/Header/Header';


function App() {

  return (
    <div>
      <Header></Header>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
