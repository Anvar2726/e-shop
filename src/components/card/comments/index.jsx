import React from "react";
import { FaStar } from "react-icons/fa";

import "./style.scss";
const Comments = ( reviews ) => {
  return (
    <section className="comments">
      <div className="comments__list">
        <div  className="comments__item">
            <div className="comments__header">
              <span className="comments__name">{reviews.reviewerName}</span>
              <span className="comments__date">{new Date(reviews.date).toLocaleDateString()}</span>
            </div>

            <div className="comments__rating">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} size={16} color={index < reviews.rating ? "#ffc107" : "#ccc"} />
              ))}
            </div>

            <p className="comments__text">{reviews.comment}</p>
          </div>
      </div>
    </section>
  );
};

export default Comments;
