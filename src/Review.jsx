import React from "react";
import { useState } from "react";
import data from "./data/data";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const goNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const goPrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const goRandom = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * data.length);
      return checkNumber(newIndex);
    });
  };

  return (
    <>
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <h4>{job}</h4>
      </div>
      <div className="text-box">
        <p>{text}</p>
      </div>
      <div className="arrows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
          onClick={goPrev}
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
        <button onClick={goRandom}> Random Comment !</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
          onClick={goNext}
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </>
  );
}

export default Reviews;
