import React, { useState } from "react";
import "./App.css";
import BodyApp from "./Page/home/Body";
import NevBar from "./Page/home/NevBar";
import CartDetails from "./Component/Cards/CartDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartDetails, setShowCartDetails] = useState(false);

  const handleAddToCart = (productId, productName, price) => {
    // Logic to add item to cart
    const newItem = { id: productId, name: productName, price: price };
    setCartItems([...cartItems, newItem]);
  };

  const handleViewCartDetails = () => {
    // Toggle visibility of cart details
    setShowCartDetails(!showCartDetails);
  };

  return (
    <div
      style={{ background: "white", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <NevBar
        cartTotal={cartItems.length}
        onViewCartDetails={handleViewCartDetails}
      />
      <BodyApp onAddToCart={handleAddToCart} />
      {showCartDetails && <CartDetails cartItems={cartItems} />}{" "}
      {/* Render CartDetails if showCartDetails is true */}
    </div>
  );
};

export default App;
