import React from "react";
import { Link } from "react-router-dom";
import delivery from "../icons/delivery.png";

const HighlightsCard = ({ name, price, description, image }) => {
    return (
        <div className="card-content">
            <div className="card-img">
                <img src={image} alt={name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3 id="name">{name}</h3>
                    <h3 id="price">{price}</h3>
                </div>
                <p>{description}</p>
                <div className="card-btm">
                    <Link to="/">
                        <button id="button" to="/">
                            Order A Delivery
                            <img src={delivery}/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default HighlightsCard;