import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <ul className="Items">
      {items.map(({ id, name, category }) => (
        <Item key={id} name={name} category={category} />
      ))}
    </ul>
  );
}

export default ItemList;
