import GalleryVideo from "../components/GalleryVideo";
import Navbar from "../components/Navbar";
import { Zoom } from "react-awesome-reveal";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

const videos = () => {
  return (
    <div>
      <Navbar />
      <div className="divApiVid">
      <Zoom>
        <YouTubePlaylist
          apiKey="AIzaSyAeIaqpDrH5tYTftRSISnJjEtS3sD0K-mA"
          playlistId="PL_Yk0jY7rkyBYBb3ghH82M7ku6sMFoz25"
          uniqueName="apivideos"
        />
      </Zoom>
      </div>
    </div>
  );
};

export default videos;
