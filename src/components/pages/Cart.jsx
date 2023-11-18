import MyContext from "../../contexts/shopContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, RemoveFromCart, decreaseQuantity } = useContext(MyContext);

  const navigate = useNavigate();
  const isEmpty = cart.length === 0;

  const ContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="my-5">
      <h4>See Cart Items!</h4>
      <Row>
        {isEmpty ? (
          <p>No item in cart</p>
        ) : (
          cart.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Body className="card-Body">
                  <Card.Title>product</Card.Title>
                  <Card.Text>
                    <Link to={`/productDetails/${item.id}`}>
                      <img
                        className="productimg"
                        src={item.image}
                        alt="items"
                      />
                    </Link>
                  </Card.Text>

                  <p className="priceTag">
                    <span>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="reduceQuantitybtn"
                      >
                        -
                      </button>
                    </span>
                    ${item.price} [{item.quantity}]
                  </p>

                  <Button
                    onClick={() => RemoveFromCart(item.id)}
                    className="RemoveFromCartBtn"
                  >
                    Remove from cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <div className="d-flex CartBtnParent">
        <button
          className="btn btn-success py-2 mb-2"
          onClick={ContinueShopping}
        >
          Continue Shopping
          <span className="mx-2">
            <i class="bi bi-arrow-right"></i>
          </span>
        </button>
        <Link to="/Checkout">
          <button
            className="btn btn-success py-2 mb-2 mx-3"
            onClick={ContinueShopping}
          >
            Proceed To Checkout
            <span className="mx-2">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
