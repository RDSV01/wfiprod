import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import Loader from "./Loader";
import getPlaylistData from "../getPlaylistData";
import "../css/YouTubePlaylist.css";
import Tilt from "react-parallax-tilt";


function YouTubePlaylist({ apiKey, playlistId, uniqueName }) {

  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];
  const [urls, setUrls] = useState([]);
  const [playlistDataArray, setPlaylistDataArray] = useState(null);
  const [isNotFetchingData, setIsNotFetchingData] = useState(true);
  const [uniqueNameParsed] = useState(
    uniqueName.toLowerCase().replace(/\s/g, "-")
  );
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  let youtubeVideoFiguresArray = null;

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function saveSubsequentPlaylistAndURLDataArrayToState() {
    const lastGalleryItem = playlistDataArray[playlistDataArray.length - 1];
    getPlaylistData(apiKey, playlistId, lastGalleryItem.nextPageToken)
      .then((newData) => {
        const newUrls = newData.map(
          (data) => `https://www.youtube.com/watch?v=${data.resourceId.videoId}`
        );
        setUrls([...urls, ...newUrls]);
        setPlaylistDataArray([...playlistDataArray, ...newData]);
      })
      .catch((e) =>
        console.error(`Error getting next page playlist data: ${e}`)
      );
    setIsNotFetchingData(true);
  }

  function handleScroll(e) {
    if (playlistDataArray && youtubeVideoFiguresArray) {
      const playlistGalleryDiv = document.getElementById(uniqueNameParsed);
      const galleryHeight = playlistGalleryDiv.clientHeight;
      const viewportHeight = e.target.documentElement.clientHeight;
      const lengthScrolled = e.target.documentElement.scrollTop;
      const galleryHeightIsGreaterThanViewport = galleryHeight > viewportHeight;
      const heightAboveGallery = playlistGalleryDiv.offsetTop;
      const totalGalleryScrollableHeight = galleryHeightIsGreaterThanViewport
        ? galleryHeight - viewportHeight + heightAboveGallery
        : 0;
      const remainingGalleryScrollableHeight =
        totalGalleryScrollableHeight - lengthScrolled;
      const scrolledToGalleryBottom = remainingGalleryScrollableHeight <= 0;
      const moreVideosAvailable =
        playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;

      if (scrolledToGalleryBottom && moreVideosAvailable && isNotFetchingData) {
        setIsNotFetchingData(false);
        saveSubsequentPlaylistAndURLDataArrayToState();
      }
    }
  }

  if (playlistDataArray) {
    youtubeVideoFiguresArray = playlistDataArray.map((item, index) => {
      if (item.title !== "Deleted video") {
        return (
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <figure className="youtube-video-figure">
              <div key={item.id} className="youtube-video-wrapper">
                <img
                  alt={`Video ${index + 1} of ${playlistDataArray.length}`}
                  src={item.thumbnails.medium.url}
                  
                  className="youtube-video-image"
                  onClick={() => openLightboxOnSlide(index + 1)}
                />
              </div>
              <h3>{item.title}</h3>
            </figure>
          </Tilt>
        );
      } else {
        return "";
      }
    });
  }

  useEffect(() => {
    function saveInitialPlaylistAndURLDataArrayToState() {
      getPlaylistData(apiKey, playlistId)
        .then((items) => {
          const urls = items.map(
            (item) =>
              `https://www.youtube.com/watch?v=${item.resourceId.videoId}`
          );
          setUrls(urls);
          setPlaylistDataArray(items);
        })
        .catch((e) => console.error(`Error getting playlist data: ${e}`));
    }

    saveInitialPlaylistAndURLDataArrayToState();
  }, [apiKey, playlistId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id={uniqueNameParsed} className="playlist-gallery-div">
      {playlistDataArray && uniqueName ? youtubeVideoFiguresArray : <Loader />}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={urls}
        type="youtube"
        key={urls.length}
      />
    </div>
  );
}

export default YouTubePlaylist;
