import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide>
        <Card />
      </Slide>
    </div>
  );
};

export default Home;
