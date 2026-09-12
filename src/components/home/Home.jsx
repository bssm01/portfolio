import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="mid">
        <div className="mid-para">
          <p className="mini-tag">frontend • backend • AI</p>
          <h1>Houari Bassem Abdelhadi</h1>
          <p className="role">Web Developer</p>
        </div>

        <div className="mid-btn">
          <NavLink to="/work" className="primary-btn">
            See my work
          </NavLink>
          <NavLink to="/contact" className="secondary-btn">
            Contact me
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
