import logo from './logo.svg';
import './App.css';
import YourBotArmy from './components/YourBotArmy';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';



function App() {
  const [yourArmy,setYourArmy] = useState([])
  useEffect(()=>{
      fetch("https://bot-battlr-json-server.onrender.com/your_army")
      .then(res=>res.json())
      .then(data=>setYourArmy(data))
  },[])
  
  return (
    <div className="App">
      <YourBotArmy yourArmy={yourArmy}/>
      <Outlet context={[setYourArmy]}/>     
    </div>
  );
}

export default App;
