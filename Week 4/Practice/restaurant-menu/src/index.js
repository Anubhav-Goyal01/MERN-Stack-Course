import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const menuData = [
  {
    name: "Farmhouse Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 6,
    photoName: "photos/farmhouse.jpg",
    soldOut: false,
  },
  {
    name: "Sushi",
    ingredients: "Salmon, tuna, and avocado",
    price: 10,
    photoName: "photos/sushi.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Wings",
    ingredients: "chicken wings, chilli and onion",
    price: 12,
    photoName: "photos/chicken-wings.jpg",
    soldOut: false,
  },
  {
    name: "French Fries",
    ingredients: "potato, salt and pepper",
    price: 12,
    photoName: "photos/fries.jpg",
    soldOut: false,
  },
  {
    name: "Noodles",
    ingredients: "noodles, chilli and onion",
    price: 15,
    photoName: "photos/noodles.jpg",
    soldOut: true,
  },
  {
    name: "Red sauce pasta",
    ingredients: "pasta, tomato sauce and cheese",
    price: 18,
    photoName: "photos/pasta.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu menuData={menuData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>The React Restaurant</h1>
    </header>
  );
}

function Menu({ menuData }) {
  const numDishes = menuData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numDishes > 0 ? (
        <ul className="dishes">
          {menuData.map((dish) => (
            <Dish dish={dish} key={dish.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Dish({ dish }) {
  return (
    <li className={`dish ${dish.soldOut ? "sold-out" : ""}`}>
      <img src={dish.photoName} alt={dish.name} />
      <div>
        <h3>{dish.name}</h3>
        <p>{dish.ingredients}</p>
        <span>{dish.soldOut ? "SOLD OUT" : dish.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
