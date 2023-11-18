import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <p>&copy; 2023 shopzy collections</p>
            </div>
            <div className="footer-section">
              <p>Email: shopzy@example.com</p>
              <p>Phone: +234 8102-374462</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
