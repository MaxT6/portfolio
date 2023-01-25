import games from "../JSON/games.json";
// import { Link } from "react-router-dom"


const Games = () => {
  return (
    <div className="games">
      <h1 className="games-title">Check Out My Projects</h1>
      <div className="game-images-container">
        {games.map((game)=> {
          return (
            <div className="game-card-container" key={game.id}>
              <div className="game-card">
                {/* <h2>{game.txt}</h2> */}
              </div>
                <div className="game-card-specific">
                   <a href={game.link} target="_blank" rel="noreferrer">
                    <img className="game-img" src={game.img} alt="list of projects and links to the projects" />
                    </a>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Games;