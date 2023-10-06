import React from "react";

const ReviewCard = ({ name, rating, photo, review }) => {
    return (
        <div className="review-card">
            <h3 id="rating">{rating}</h3>
            <img src={photo} alt={name}/>
            <h3 id="name">{name}</h3>
            <p>{review}</p>
        </div>
    )

};

export default ReviewCard;