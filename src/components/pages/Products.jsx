import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import { Card, Button } from "react-bootstrap";
import Shop from "../pages/Shop";
import MyContext from "../../contexts/shopContext";

const Cart = () => {
  const { isLoading, setIsLoading, products, setProducts } =
    useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <h4 className="text-center my-4">
        Make <span className="text-success">Your</span> Choice!
        <i class="bi bi-emoji-wink"></i>
      </h4>
      <Row>
        {isLoading ? (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : !products ? (
          <h4>No product available!</h4>
        ) : (
          products.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <Shop product={product} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
export default Cart;
