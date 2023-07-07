import { useEffect, useState } from "react";
import "../assets/css/GalleryVideo.css";

const GalleryVideo = () => {
  const apiKey = "AIzaSyAeIaqpDrH5tYTftRSISnJjEtS3sD0K-mA";
  const playlistId = "PL_Yk0jY7rkyBYBb3ghH82M7ku6sMFoz25";
  const maxResults = 10;

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-container">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <div className="videowithtitle">
            <iframe
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryVideo;
