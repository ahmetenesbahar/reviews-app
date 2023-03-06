import React from "react";

function ReviewImage({ people }) {
  return (
    <>
      {people.map((person) => {
        return (
          <>
            <div className="background"></div>
            <img src={person.image} alt="" />
          </>
        );
      })}
    </>
  );
}

export default ReviewImage;
