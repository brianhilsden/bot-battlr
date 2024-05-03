import BotCard from "./BotCard"

function YourBotArmy({yourArmy}){

    return(
        <>
        {yourArmy[0] && <div style={{ display: 'flex',flexWrap:"wrap",gap:"1rem" }}>
        {
            yourArmy.map(bot=>{
                return(
                    <BotCard key={bot.id} id={bot.id} image={bot.avatar_url} name={bot.name} botClass={bot.bot_class} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} />
                )
            })

        }

    </div>}
    </>);
    
}
export default YourBotArmy