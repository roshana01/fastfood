import React from "react";
import PizzaItem from "./PizzaItem";
import pizza from "./data/data";


export default function Menu() {
  return (
    <>
      <div className="menu">
        <div className="pizza-contant">
          <ul className="pizza-list">
            {pizza.map((item,i) => (
              <PizzaItem
                title={item.name}
                text={item.text}
                price={item.price}
                photo={item.photo}
                soldOut={item.soldOut}
               key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
