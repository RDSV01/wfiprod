import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import "../assets/css/Card.css"

const Card = () => {
  return (
    <div className="bodycard">
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ display: "flex" }}>
        <div className="card">
          <img src="src/assets/pp.jpg"></img>
          <div>
            <pre>
              <h3>
                <span>W</span>
                <span>e </span>
                <span>f</span>
                <span>ilm </span>
                <span>i</span>
                <span>t </span>
                Prod
              </h3>
            </pre>
            <h2>Photographe / Vidéaste</h2>
            <p>Découvrir mes projets</p>
            <div className="doubleButton">
              <Link to={"/photos"}>
                <button>Photo</button>
              </Link>
              <Link to={"/videos"}>
                <button>Vidéo</button>
              </Link>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
