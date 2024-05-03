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
  return (
    <div className="card" style={{ width: "18rem" }}>
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
