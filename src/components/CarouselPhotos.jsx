import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/CarouselPhotos.css";
import { Zoom } from "react-awesome-reveal";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
      setTimeout(() => setIsAnimating(false), 500); // Set a timeout for animation completion
    }
  };

  const handleClickPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]);
      setTimeout(() => setIsAnimating(false), 500); // Set a timeout for animation completion
    }
  };

  const handleScroll = (e) => {
    if (!isAnimating) {
      const delta = e.deltaY;
      if (delta > 0) {
        handleClickNext();
      } else if (delta < 0) {
        handleClickPrev();
      }
    }
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="container" onWheel={handleScroll}>
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <h1 className="name">{item.name}</h1>
              <p className="des">{item.desc}</p>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
