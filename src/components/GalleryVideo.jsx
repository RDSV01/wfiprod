import "../assets/css/GalleryVideo.css";
import "../assets/css/Loader.css";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

const GalleryVideo = () => {
  return (
    <div className="divApiVid">
      <YouTubePlaylist
        apiKey="AIzaSyAeIaqpDrH5tYTftRSISnJjEtS3sD0K-mA"
        playlistId="PL_Yk0jY7rkyBYBb3ghH82M7ku6sMFoz25"
        uniqueName="apivideos"
      />
    </div>
  );
};

export default GalleryVideo;
