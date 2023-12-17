import React from "react";
import classes from "./MindBehind.module.css";

import gurvir from "../../../images/team/gurvir.png";
import piyush from "../../../images/team/piyush.png";
import sunny from "../../../images/team/sunny.png";
import amar from "../../../images/team/amar.png";
import abhinav from "../../../images/team/abhinav.png";
import saxena from "../../../images/team/saxena.jpeg";
import ashish from "../../../images/team/ashish.jpeg";
import dhruv from "../../../images/team/dhruv.jpeg";

const MindBehind = () => {
  const images = [
    {
      id: 1,
      image: abhinav,
      alt: "abhinav",
    },
    {
      id: 5,
      image: amar,
      alt: "amar",
    },
    {
      id: 6,
      image: ashish,
      alt: "ashish",
    },
    {
      id: 2,
      image: gurvir,
      alt: "gurvir",
    },

    {
      id: 4,
      image: piyush,
      alt: "piyush",
    },
    {
      id: 3,
      image: sunny,
      alt: "sunny",
    },
    {
      id: 7,
      image: saxena,
      alt: "saxena",
    },
    {
      id: 8,
      image: dhruv,
      alt: "dhruv",
    },
  ];

  const onMouseOverHandler = (e, data) => {
    console.log("onmouseover", data);
    console.log(e.target);
  };

  const TeamImages = () => {
    return (
      <div className={classes.team}>
        <div className={classes.teamMemberImage}>
          {images.map((image) => {
            return (
              <img
                className={classes.img}
                src={image.image}
                key={image.id}
                alt={image.alt}
                onMouseOver={(e) => onMouseOverHandler(e, image.alt)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.heading}>Team Behind The Project</p>
        <p className={classes.desc}>
          Meet the dynamic team fueling our web development project with
          passion, creativity, and expertise, bringing innovation to every line
          of code.
        </p>
        <TeamImages />
      </div>
    </div>
  );
};

export default MindBehind;
