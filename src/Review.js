import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [value, setValue] = useState(0);

  let person = people[value];

  const checkNumber = (value) => {
    if (value === 0) {
      return (value = people.length - 1);
    }
    if (value === people.length) {
      return (value = 0);
    }
    return value;
  };

  const previousReview = () => {
    value--;
    setValue(checkNumber(value));
  };

  const nextReview = () => {
    value++;
    setValue(checkNumber(value));
  };

  const randomReview = () => {
    let newValue = Math.floor(Math.random() * people.length);
    if (value === newValue) {
      newValue = value + 1;
    }
    console.log(newValue);
    setValue(checkNumber(newValue));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={person.image} alt={person.name} />
        <span className="quote-icon ">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <div>
        <h4 className="author">{person.name}</h4>
        <p className="job">{person.job}</p>
        <p className="info">{person.text}</p>
      </div>
      <div>
        <button className="prev-btn" onClick={previousReview}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="prev-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
