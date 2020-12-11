import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
