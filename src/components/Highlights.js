import React from "react";
import HighlightsCard from "./HighlightsCard";
import { Link } from "react-router-dom";
import salad from "../images/greek salad.jpg";
import bruschetta from "../images/bruschetta.png";
import lemon from "../images/lemon dessert.jpg";

const dishes = [
    {
        name: "Greek Salad",
        price:"$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: salad,
    },
    {
        name: "Bruschetta",
        price:"$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruschetta,
    },
    {
        name: "Lemon Dessert",
        price:"$5.99",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authenic as can be imagined.",
        image: lemon,
    },
];

function Highlights() {
    return (
        <>
            <div className="highlights">
                <div className="highlights-title">
                    <h2>This Week's Specials</h2>
                    <Link to="/">
                        <button id="button" to="/">
                            Online Menu
                        </button>
                    </Link>
                </div>
                <div className="highlights-cards">
                    {dishes.map((dish) => (
                        <HighlightsCard
                            key={dish.name}
                            name={dish.name}
                            price={dish.price}
                            description={dish.description}
                            image={dish.image} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Highlights;