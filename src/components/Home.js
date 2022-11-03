import skills from "../JSON/skills.json";

const Home = () => {
  return (
    <div className="home">
      <header className="header-container">
        <div className="header-txt-container">
          <h1 className="header-title">Maximilian Thiel | Full Stack Web Developer</h1>
        </div>
      </header>
      <div className="icons-container">
        {skills.map((skill) => {
          return (
            <div className="skill-card-container" key={skill.id}>
              <div className="skill-card">
                <div className="skill-text">
                  <h3>{skill.name}</h3>
                  <span>{skill.txt}</span>
                </div>
                <div className="skill-img">
                  <img src={skill.img} alt="Icons for my coding skills"/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
