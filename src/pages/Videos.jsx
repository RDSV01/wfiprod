import GalleryVideo from "../components/GalleryVideo";
import Navbar from "../components/Navbar";
import { Slide } from "react-awesome-reveal";




const videos = () => {
  return (
    <div>
      <Navbar />
      <Slide>
        <GalleryVideo/>
      </Slide>
    </div>
  );
};

export default videos;
