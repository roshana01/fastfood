import React from "react";
import PizzaItem from "./PizzaItem";
import pizza from "../data/data";

export default function Menu() {
  return (
    <>
      <div className="menu">
        <div className="pizza-content">
          <ul className="pizza-list">
            {pizza.map((item, i) => (
              <PizzaItem items={item} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
