import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Ramen",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Gamzatang",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/990/086/3555cb39cb6066ed9c092d1b77975719.JPG",
    rating: 4,
  },
  {
    id: 3,
    name: "Chicken",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Pizza",
    image: "https://prtimes.jp/i/37526/57/resize/d37526-57-560450-0.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Hamburger",
    image:
      "https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg",
    rating: 5,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
