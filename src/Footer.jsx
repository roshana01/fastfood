import React from "react";

export default function Footer() {
  let hours = new Date().getHours();
  const openPizza = 9;
  const clearPizza = 22;
  const isOpen = hours >= openPizza && hours <= clearPizza;

  return (
    <>
      <div className="footer">
        <h3>
          {isOpen === true
            ? ` Open Fast Food In Hours ${openPizza}:34PM 🌭`
            : `  clear Fast Food In Hours ${clearPizza}:12AM🍕`}
        </h3>
      </div>
    </>
  );
}
