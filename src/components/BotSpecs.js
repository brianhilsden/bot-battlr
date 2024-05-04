import { useEffect, useState } from "react";
import logo from "./heart-ecg.png"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { emojis } from "../App";

const BOT_API_URL = "http://localhost:4001/bots";
const YOUR_ARMY_API_URL = "http://localhost:4001/your_army";
/* const BOT_API_URL = "https://bot-battlr-json-server.onrender.com/bots"; */
/* const YOUR_ARMY_API_URL = "https://bot-battlr-json-server.onrender.com/your_army"; */

function BotSpecs(){
    const [ ,setYourArmy,setBotData,yourArmy] = useOutletContext();
    const navigate = useNavigate();
    const params= useParams();
    const botId = params.id;
    const [bot,setBot] = useState({});
    const botEmoji = emojis.find(item=>item[bot.bot_class])

    useEffect(()=>{
        fetch(`${BOT_API_URL}/${botId}`)
        .then(res => res.json())
        .then(data=>setBot(data))
        .catch(error => console.error('Error fetching bot details:', error));
    },[botId]);

    if(!bot.name){
        return <p >Loading...</p>
    }

    function enlistBot(){
        const checkClass = yourArmy.find(item=>item.bot_class === bot.bot_class);
        if(yourArmy.length<6){
            if(!checkClass){
                fetch(YOUR_ARMY_API_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                body:JSON.stringify(bot)

            })
            .then(res =>res.json())
            .then(data=>setYourArmy(yourArmy=>([...yourArmy,data])))
            .then(()=>{
                removeFromCollection()
            })
            .catch(error => console.error('Error enlisting bot:', error));
        }
        else{
            alert("Choose bot from a different class.")
        }

    }else{
        alert("Team complete. To select new ones, release or discharge members of your army")
    }
    }

    function removeFromCollection(){
        fetch(`${BOT_API_URL}/${botId}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            setBotData(prevState=>prevState.filter(item=>{

                return item.id!==botId
            }))
        }).then(()=>{
            navigate("/bot-battlr")
        })
        .catch(error => console.error('Error removing bot from collection:', error));

    }
    return(
            <div style={{ display: "flex", justifyContent: "center", height:"100vh",gap:"2rem", marginTop:"2rem"}}>
                <div>
                    <img src={bot.avatar_url} style={{borderRadius:"50%", border:"grey solid 1px"}} alt="bot"/>
                </div>

                <div style={{width:"30%"}} className="d-flex flex-column align-items-center">
                    <h2>Name: {bot.name} </h2>
                    <p><b>Catchphrase</b></p>
                    <p>{bot.catchphrase}</p>
                    <br/>
                    <p><b>Class: {bot.bot_class} {botEmoji[bot.bot_class]}</b></p>
                    <div style={{border: "1px solid grey", borderRadius: "8px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={logo} style={{width:"8%"}} alt="health"/>{bot.health}&nbsp;&nbsp;<span>⚡{bot.damage}</span>&nbsp;&nbsp; <span>🛡️{bot.armor}</span>
                    </div>
                    <button onClick={()=>navigate("/bot-battlr") } className="btn btn-secondary mx-2 mt-2 mb-2" style={{width:"100%"}}>Go Back</button>
                    <button className="btn btn-primary mx-2" onClick={enlistBot} style={{width:"100%"}}>Enlist</button>
                </div>
            </div>
    )
}
export default BotSpecs