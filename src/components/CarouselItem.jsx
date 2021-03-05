import React from "react";
import propTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import play from "../assets/static/play-icon.png";

import plus from "../assets/static/plus-icon.png";

export default function CarouselItem({
  cover,
  title,
  year,
  contentRating,
  duration,
}) {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}></img>
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={play}
            alt="Play Icon"
          ></img>
          <img
            className="carousel-item__details--img"
            src={plus}
            alt="Plus Icon"
          ></img>
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}>`}</p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};
