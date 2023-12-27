import React from "react";

export default function PizzaItem({ title, text, price, photo, soldOut }) {
  // console.log(title);
  return (
    <>
      <li className="pizza-list--item">
        <img src={photo} alt="" className={soldOut ? "active" : ""} />
        <div className="text-list">
          <h2 className="pizza-title">{title}🍕</h2>
          <p className="pizza-text">{text}</p>
          <span className={soldOut ? 'sold' : "pizza-price"}>{soldOut ? 'soldOut📤' :` ${price}$`}</span>
        </div>
      </li>
    </>
  );
}
