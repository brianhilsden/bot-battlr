import { useState, useEffect } from "react";
import BotCard from "./BotCard";
function BotCollection() {
  const [BotData, setBotData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/bots")
    /* fetch("https://bot-battlr-json-server.onrender.com/bots") */
      .then((res) => res.json())
      .then((data) => setBotData(data))
      
  }, []);
 
  if(!BotData[0]){
    return <h2>Loading...</h2>
  }
  return (
    <div style={{ display: 'flex',flexWrap:"wrap",justifyContent:"center",gap:"1rem" }}>
        {
            BotData.map(bot=>{
                return(
                    <BotCard key={bot.id} id={bot.id} image={bot.avatar_url} name={bot.name} botClass={bot.bot_class} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} />
                )
            })

        }

    </div>);
}
export default BotCollection;
