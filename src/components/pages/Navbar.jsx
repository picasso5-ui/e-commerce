import "../pages/Navbar.css";
import { Link } from "react-router-dom";
import Cart from "../images/Cart.svg";
import MyContext from "../../contexts/shopContext";
import { useContext } from "react";

const Navbar = () => {
  const { cartTotal } = useContext(MyContext);
  return (
    <div className="container-fluid sticky-top shadow Navbar ">
      <div>
        <Link to="/">
          <h4>Shopzy</h4>
        </Link>
      </div>
      <div className="d-flex gap-4">
        <Link to="/Login">
          <li>
            Login
            <span>
              <i class="bi bi-person-circle"></i>
            </span>
          </li>
        </Link>
        <Link to="/cart">
          <img src={Cart} style={{ width: "20px" }} />
          <span>[{cartTotal}]</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
