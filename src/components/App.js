import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Produce" },
    { id: 2, name: "Milk", category: "Dairy" },
    { id: 3, name: "Cake", category: "Dessert" },
  ]);

  function handleNewItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList items={items} onItemFormSubmit={handleNewItem} />
    </div>
  );
}

export default App;
