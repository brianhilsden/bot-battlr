import { useNavigate } from "react-router-dom";
import logo from "./heart-ecg.png"
function YourArmyBotCard({
    bot,
  id,
  image,
  name,
  botClass,
  catchphrase,
  health,
  damage,
  armor,
  setYourArmy,
  setBotData
}) {
    const navigate = useNavigate()
    function deleteBot(){
        if(window.confirm(`Warning! This will discharge ${name} forever.Kindly confirm`)){
            fetch(`http://localhost:4001/your_army/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(()=>{
            setYourArmy(prevState=>prevState.filter(item=>item.id!=id))
        })

        }
        
    }
    function releaseBot(){
        if(window.confirm(`Note, this will release ${name} back into the Bot collection.Kindly confirm `)){
            fetch(`http://localhost:4001/your_army/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"applicatxion/json"
            }
        })
        .then(()=>{
            setYourArmy(prevState=>prevState.filter(item=>item.id!=id))
        })
        fetch("http://localhost:4001/bots",
        /* fetch("https://bot-battlr-json-server.onrender.com/bots", */{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(bot)

        })
        .then(res=>res.json())
        .then(()=>setBotData(data=>([bot,...data])))

        }
        
      
    }

  
  return (
        <div className="card" style={{minWidth:"10rem",maxWidth:"10rem"}} >
          <img src={image} className="card-img-top" style={{ backgroundColor: "grey",cursor:"alias" }} alt="Bot Image" onClick={releaseBot}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{catchphrase}</p>
            <p className="card-text"><img src={logo} style={{width:"15%"}}></img>{health}  ⚡{damage}  🛡️{armor}</p>
            <button style={{border: 'none', background: 'none', position: 'absolute', top: '5px', right: '1px'}} onClick={deleteBot}>
              <span style={{ color: 'red' }}><b>X</b></span>
            </button>
            
          </div>
        </div>
  );
}
export default YourArmyBotCard;
