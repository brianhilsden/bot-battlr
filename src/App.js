import logo from './logo.svg';
import './App.css';
import YourBotArmy from './components/YourBotArmy';
import { Outlet } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <YourBotArmy/>
      <Outlet/>     
    </div>
  );
}

export default App;
