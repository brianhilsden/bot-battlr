import { useEffect, useState } from "react";
import logo from "./heart-ecg.png"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function BotSpecs(){
    const navigate = useNavigate()
    const params= useParams()
    const botId = params.id
    const [bot,setBot] = useState({})
    console.log(params);
    useEffect(()=>{
       /*  fetch(`http://localhost:4001/bots/${botId}`) */
        fetch(`https://bot-battlr-json-server.onrender.com/bots/${botId}`)
        .then(res=>res.json())
        .then(data=>setBot(data))
    },[botId])
    if(!bot.name){
        return <p >Loading...</p>
    }
    return(
            <div style={{ display: "flex", justifyContent: "center", height:"100vh", alignItems:"center",gap:"2rem" }}>
                <div>
                    <img src={bot.avatar_url}/>
                </div>

                <div style={{width:"30%"}} className="text-center">
                    <h2>Name:{bot.name} </h2>
                    <p><b>Catchphrase</b></p>
                    <p>{bot.catchphrase}</p>
                    <br/>
                    <p><b>Class:{bot.bot_class}</b></p>
                    <div>
                        <img src={logo} style={{width:"8%"}}/>{bot.health}  ⚡{bot.damage}  🛡️{bot.armor}
                    </div>
                    <button onClick={()=>navigate("/bot-battlr") } className="btn btn-secondary mx-2">Go Back</button>
                    <button className="btn btn-primary mx-2">Enlist</button>
                </div>
            </div>
    )
}
export default BotSpecs