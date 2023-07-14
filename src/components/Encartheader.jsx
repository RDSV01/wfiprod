import React from "react";
import "../assets/css/Encartheader.css";
import { Slide } from "react-awesome-reveal";

const Encartheader = ({ title, paragrpahe }) => {
  return (
    <Slide>
      <div className="encartheader">
        <h1>{title}</h1>
        <p>{paragrpahe}</p>
      </div>
    </Slide>
  );
};

export default Encartheader;
