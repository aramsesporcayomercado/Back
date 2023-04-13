import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "./category";
import { GameShop } from "./gameShop";
import { Person } from "./person";
import { Product } from "./product";
import { Buy } from "./Buy";

const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <ul>
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/gameshop" element={<GameShop />} />
          <Route path="/person" element={<Person />} />
          <Route path="/product" element={<Product />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </ul>
    </div>
  );
};

export default Sidebar;
