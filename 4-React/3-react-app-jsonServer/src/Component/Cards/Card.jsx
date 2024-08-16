import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (productId, productName, price) => {
    onAddToCart(productId, productName, price);
    console.log(`${productId} : ${productName} :  ${price}`);
    alert(`Product id :${productId}, name :${productName} added to shop !`);
  };

  return (
    <Row>
      {products.map((product) => (
        <Col
          key={product.id}
          sm={12}
          md={6}
          lg={3}
          style={{ marginTop: "10px" }}
        >
          <Card style={{ width: "18rem", position: "relative" }}>
            <Card.Body>
              {product.Sale_discount && product.Sale_discount > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  Sale {product.Sale_discount}%
                </div>
              )}
              <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ marginBottom: "10px" }}
              />
              <Card.Text style={{ color: "grey", fontSize: "14px" }}>
                {product.category}
              </Card.Text>
              <Card.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
                {product.name}
              </Card.Title>
              <Row>
                <Col>
                  <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                    ${product.price.toFixed(2)}
                  </span>{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "grey" }}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </Col>
              </Row>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {[...Array(5)].map((star, index) => {
                  return index < Math.round(product.rating) ? (
                    <FaStar key={index} color="orange" />
                  ) : (
                    <FaRegStar key={index} color="orange" />
                  );
                })}
              </div>
              <Button
                variant="light"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  borderRadius: "50%",
                }}
                onClick={() =>
                  handleAddToCart(product.id, product.name, product.price)
                }
              >
                <FaShoppingCart />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
