import React from "react";

export default function PizzaItem({ items }) {
  // console.log(items);

  // console.log(title);
  return (
    <>
      <li className="pizza-list--item">
        <img src={items.photo} alt="" className={items.soldOut ? "active" : ""} />
        <div className="text-list">
          <h2 className="pizza-title">{items.title}🍕</h2>
          <p className="pizza-text">{items.text}</p>
          <span className={items.soldOut ? "sold" : "pizza-price"}>
            {items.soldOut ? "soldOut📤" : ` ${items.price}$`}
          </span>
        </div>
      </li>
    </>
  );
}
