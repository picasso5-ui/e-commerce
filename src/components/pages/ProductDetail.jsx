import { useParams } from "react-router-dom";
import MyContext from "../../contexts/shopContext";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const { products, decreaseQuantity, addToCart } = useContext(MyContext);
  const product = products.find((each) => each.id === parseInt(id, 10));

  return (
    <Row className="d-flex my-5">
      <Col sm={6} className="text-center">
        <img className="productDetailImg" src={product.image} />
        <div className="mt-3">
          <button onClick={() => decreaseQuantity(product.id)} className="px-3">
            -
          </button>
        </div>
      </Col>
      <Col sm={6} className="text-center my-4 ">
        <h4>{product.title}</h4>
        <h4>price:{product.price}</h4>
        <p>
          <strong>Description:{product.description}</strong>
        </p>
        <button className="btn btn-success" onClick={() => addToCart(product)}>
          Add To task
        </button>
      </Col>
    </Row>
  );
};

export default ProductDetail;
