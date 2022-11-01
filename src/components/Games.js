import "../styles/Games.css";
import games from "../JSON/games.json";
// import { Link } from "react-router-dom"


const Games = () => {
  return (
    <div className="games">
      <h1>Images of compeleted games to go here</h1>
      <div className="game-images-container">
        {games.map((game)=> {
          return (
            <div className="game-card-container" key={game.id}>
              <div className="game-card">
                <h2>{game.text}</h2>
              </div>
              <a href={game.link} target="_blank" rel="noreferrer">
                <div className="game-card">
                  <img src={game.img} alt="list of games and links to the games" />
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Games;