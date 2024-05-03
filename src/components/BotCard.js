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
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Health: {health}</li>
          <li className="list-group-item">Damage: {damage}</li>
          <li className="list-group-item">Armor: {armor}</li>
        </ul>
      </div>
    </div>
  );
}
export default BotCard;
