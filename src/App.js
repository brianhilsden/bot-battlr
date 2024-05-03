import logo from './logo.svg';
import './App.css';
import YourBotArmy from './components/YourBotArmy';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';



function App() {
  const [yourArmy,setYourArmy] = useState([])
  useEffect(()=>{
      fetch("http://localhost:4001/your_army")
      /* fetch("https://bot-battlr-json-server.onrender.com/your_army") */
      .then(res=>res.json())
      .then(data=>setYourArmy(data))
  },[])
  
  const [BotData, setBotData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/bots")
    /* fetch("https://bot-battlr-json-server.onrender.com/bots") */
      .then((res) => res.json())
      .then((data) => setBotData(data))
      
  }, []);
 
  return (
    <div className="App">
      <YourBotArmy yourArmy={yourArmy} setYourArmy={setYourArmy} setBotData={setBotData}/>
      <Outlet context={[BotData,setYourArmy,setBotData]}/>     
    </div>
  );
}

export default App;
