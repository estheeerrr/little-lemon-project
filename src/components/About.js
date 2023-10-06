import React from "react";
import Chefs from "../images/Mario and Adrian A.jpg";
import Indoor from "../images/restaurant.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
          massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
          condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
          accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
          lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
          hendrerit consequat.
        </p>
      </div>
      <div className="about-img">
        <img id="chefs" src={Chefs} alt="male owner" />
        <img id="indoor" src={Indoor} alt="female owner" />
      </div>
    </div>
  );

}

export default About;