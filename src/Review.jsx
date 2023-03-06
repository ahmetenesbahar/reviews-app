import React from "react";
import { useState } from "react";
import data from "./data/data";
import ReviewImage from "./ReviewImage";

function Reviews() {
  const [review, setReview] = useState(data);
  return (
    <>
      <ReviewImage people={review} />
      {review.map((person) => {
        return (
          <>
            <div className="text">
              <h3 className="name">{person.name}</h3>
              <p className="job">{person.job}</p>
              <p className="review">{person.text}</p>
            </div>
          </>
        );
      })}
      <div className="arrows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </>
  );
}

export default Reviews;
