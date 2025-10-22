import React, { useState } from "react";
import ItemList from "./ItemList"; // PascalCase import
import ItemForm from "./ItemForm";
import Filter from "./Filter";


export default function ShoppingList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState(items);

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleAddItem(newItem) {
    setItemList((prev) => [...prev, newItem]);
  }

  // Filter items by search term and category
  const filteredItems = itemList.filter(({ name, category }) => {
    const matchesCategory =
      selectedCategory === "All" || category === selectedCategory;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Filter
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ItemList items={filteredItems} />
    </div>
  );
}
