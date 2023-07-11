import GalleryVideo from "../components/GalleryVideo";
import Navbar from "../components/Navbar";
import { Bounce } from "react-awesome-reveal";

const videos = () => {
  return (
    <div>
      <Navbar />
      <Bounce>
        <GalleryVideo />
      </Bounce>
    </div>
  );
};

export default videos;
