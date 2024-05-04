import { useOutletContext } from "react-router-dom";
import BotCard from "./BotCard";
import { useState } from "react";
import SortBar from "./SortBar";

function BotCollection() {
  const [allChecked,setAllChecked] = useState([])
  const [BotData] = useOutletContext();
  const [sortOption,setSortOption] = useState("")


function handleSelectedClass(e){
  if(e.target.checked){
    setAllChecked([...allChecked,e.target.value])
  }
  else{
    setAllChecked(allChecked.filter(item=>item!==e.target.value))
  }
 }

 const botsToDisplay = BotData.filter(item=>{
  if(allChecked.length>0){
    return  allChecked.includes(item.bot_class) 
  }
  else return true
 })

 function handleSortOption(e){
  setSortOption(e.target.value)

}
function sortBots(sortOption){
  if(sortOption==="health"){
    return (a,b)=>b.health-a.health
  }
  else if(sortOption === "armor"){
    return (a,b) => b.armor-a.armor
  }
  else if(sortOption === "damage" ){
    return (a,b) => b.damage-a.damage
  }
  else{
    return ()=>0
  }
}


 if (!BotData[0]) {
  return <h2>Loading...</h2>;
}
  return (
    <>
      <ul
        className="list-group" style={{ display: "flex", flexDirection: "row" }}>
          <h4 className="d-flex align-items-center">Choose class:</h4> &nbsp;&nbsp;    
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Witch"
            onChange={handleSelectedClass}
            aria-label="..."
          />
          Witch
        </li>
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Assault"
            onChange={handleSelectedClass}
            aria-label="..."
          />
          Assault
        </li>
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Defender"
            onChange={handleSelectedClass}
            aria-label="..."
          />
          Defender
        </li>
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Medic"
            onChange={handleSelectedClass}
            aria-label="..."
          />
         Medic
        </li>
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Captain"
            onChange={handleSelectedClass}
            aria-label="..."
          />
          Captain
        </li>
        <li className="list-group-item" style={{ flex: 1 }}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value="Support"
            onChange={handleSelectedClass}
            aria-label="..."
          />
          Support
        </li>
      </ul>
      <br/>
      <SortBar handleSortOption={handleSortOption} sortOption={sortOption}/>
     
      <div
        style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem",marginTop:"1rem"}}>
        {botsToDisplay.sort(sortBots(sortOption)).map((bot) => {
          return (
            <BotCard
              key={bot.id}
              id={bot.id}
              image={bot.avatar_url}
              name={bot.name}
              botClass={bot.bot_class}
              catchphrase={bot.catchphrase}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
            />
          );
        })}
      </div>
    </>
  );
}
export default BotCollection;
