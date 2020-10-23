import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Ramen",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg",
  },
  {
    name: "Gamzatang",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/990/086/3555cb39cb6066ed9c092d1b77975719.JPG",
  },
  {
    name: "Chicken",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
  },
  {
    name: "Pizza",
    image: "https://prtimes.jp/i/37526/57/resize/d37526-57-560450-0.jpg",
  },
  {
    name: "Hamburger",
    image:
      "https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
