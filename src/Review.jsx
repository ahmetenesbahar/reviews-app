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
    </>
  );
}

export default Reviews;
