import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <div className="bodycard">
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ display: "flex" }}>
        <div className="card">
          <img src="src/assets/pp.jpg"></img>
          <div>
            <h3>WfiProd</h3>
            <h2>Photographe / Vidéaste</h2>
            <p>Découvrir mes projets</p>
            <div className="doubleButton">
              <button>Photo</button>
              <button>Vidéo</button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
