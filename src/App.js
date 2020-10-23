import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Ramen",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg",
  },
  {
    id: 2,
    name: "Gamzatang",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/990/086/3555cb39cb6066ed9c092d1b77975719.JPG",
  },
  {
    id: 3,
    name: "Chicken",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    image: "https://prtimes.jp/i/37526/57/resize/d37526-57-560450-0.jpg",
  },
  {
    id: 5,
    name: "Hamburger",
    image:
      "https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
