import { useEffect, useState } from "react";
import "../assets/css/GalleryVideo.css";
import "../assets/css/Loader.css";

const GalleryVideo = () => {
  const apiKey = "AIzaSyAeIaqpDrH5tYTftRSISnJjEtS3sD0K-mA";
  const playlistId = "PL_Yk0jY7rkyBYBb3ghH82M7ku6sMFoz25";
  const maxResults = 10;
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.cookie = "cookieName=cookieValue; SameSite=Lax";

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );
        const data = await response.json();
        const fetchedVideos = data.items || [];
        setVideos(fetchedVideos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, [apiKey, playlistId, maxResults]);

  return (
    <div className="video-container">
      {isLoading ? (
        <div className="loader">
          <div data-glitch="Loading..." className="glitch">
            Chargement...
          </div>
        </div>
      ) : (
        videos.map((video) => (
          <div key={video.id} className="video-item">
            <div className="videowithtitle">
              <iframe
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>{video.snippet.title}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GalleryVideo;
