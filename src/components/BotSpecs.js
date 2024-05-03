import { useEffect, useState } from "react";
import logo from "./heart-ecg.png"
import { useParams } from "react-router-dom"
function BotSpecs(){
    const params= useParams()
    const botId = params.id
    const [bot,setBot] = useState({})
    console.log(params);
    useEffect(()=>{
        fetch(`http://localhost:3000/bots/${botId}`)
        .then(res=>res.json())
        .then(data=>setBot(data))
    },[botId])
    if(!bot.name){
        return <p >Loading...</p>
    }
    return(
        <div style={{display:"flex",justifyContent:"center",width:"100%",background:"black"}} >
           
            <div > 
                <h2>Name:{bot.name} </h2>
                <p><b>Catchphrase</b></p>
                <p>{bot.catchphrase}</p>
                <br/>
                <p><b>Class:{bot.bot_class}</b></p>
                <div>
                <img src={logo} style={{width:"5%"}}></img>{bot.health}  ⚡{bot.damage}  🛡️{bot.armor}
                </div>
                <button>Go Back</button>
                <button>Enlist</button>
            </div>
        </div>
    )
}
export default BotSpecs