import GalleryVideo from "../components/GalleryVideo";
import Navbar from "../components/Navbar";
import { Slide } from "react-awesome-reveal";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import Encartheader from "../components/Encartheader";

const videos = () => {
  const pageTitle = "Mes projets vidéos";
  const pageParagraph = (
    <>
      {" "}
      Voici quelques projets vidéos que j'ai réalisé. Vous pouvez retrouver
      l'ensemble de mes vidéos sur ma{" "}
      <a
        href="https://www.youtube.com/@wfiprod7286"
        target="_blank"
        rel="noopener noreferrer"
      >
        chaîne YouTube
      </a>{" "}
    </>
  );
  return (
    <div className="videos">
      <Navbar />
      <Encartheader title={pageTitle} paragrpahe={pageParagraph} />
      <div className="divApiVid">
        <Slide delay={100}>
          <YouTubePlaylist
            apiKey="AIzaSyAeIaqpDrH5tYTftRSISnJjEtS3sD0K-mA"
            playlistId="PL_Yk0jY7rkyBYBb3ghH82M7ku6sMFoz25"
            uniqueName="apivideos"
          />
        </Slide>
      </div>
    </div>
  );
};

export default videos;
