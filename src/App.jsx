import './App.scss'
import { useState } from "react";
import Header from './components/header/Header'
import Questions from './components/Questions';


export default function App() {
  const [state, setState] = useState({
    page: 1,
    price: 0
  });
  return (
    <div className="App">
      <Header/>
      <Questions state={state} setState={setState} />
      
    </div>
  );
}


