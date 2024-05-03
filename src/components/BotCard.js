import { useNavigate } from "react-router-dom";
import logo from "./heart-ecg.png"
function BotCard({
  id,
  image,
  name,
  botClass,
  catchphrase,
  health,
  damage,
  armor,
}) {
  const navigate = useNavigate()
  return (
    <div className="card" style={{ width: "18rem" }} onClick={()=>navigate(`/bot-battlr/botspecs/${id}`)}>
      <img src={image} className="card-img-top" style={{ backgroundColor: "grey" }} alt="Bot Image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{catchphrase}</p>
        <p className="card-text"><img src={logo} style={{width:"15%"}}></img>{health}  ⚡{damage}  🛡️{armor}</p>
       
      </div>
    </div>
  );
}
export default BotCard;
