import GalleryVideo from "../components/GalleryVideo";
import Navbar from "../components/Navbar";
import { Slide } from "react-awesome-reveal";
import Encartheader from "../components/Encartheader";
import BackgroundVideo from "../components/BackgroundVideo";

const videos = () => {
  const pageTitle = "Projets vidéos.";
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
      <BackgroundVideo />
      <Navbar />
      <Encartheader title={pageTitle} paragrpahe={pageParagraph} />
      <Slide delay={100}>
        <GalleryVideo />
      </Slide>
    </div>
  );
};

export default videos;
