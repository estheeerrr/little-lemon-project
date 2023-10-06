import React from "react";
import ReviewCard from "./ReviewCard";
import emily from "../images/emily.jpeg";
import ryan from "../images/ryan.jpeg";
import amanda from "../images/amanda.jpeg";
import greg from "../images/greg.jpeg"; 

const customers = [
    {
        name: "Emily",
        rating: "★★★★★",
        photo: emily,
        review: "Cozy dining atmosphere!",
    },
    {
        name: "Ryan",
        rating: "★★★★★",
        photo: ryan,
        review: "Amazing food, amazing service."
    },
    {
        name: "Amanda",
        rating: "★★★★★",
        photo: amanda,
        review: "Authentic mediterranean taste."
    },
    {
        name: "Greg",
        rating: "★★★★",
        photo: greg,
        review: "Variety of fun dessert options."
    },
];


function Testimonials() {
    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="review-section">
                {customers.map((person) => (
                    <ReviewCard
                        key = {person.name}
                        name = {person.name}
                        rating = {person.rating}
                        photo = {person.photo}
                        review = {person.review} />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;