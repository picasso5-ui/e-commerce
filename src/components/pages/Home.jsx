import HomeImg from '../images/HomeImg.avif'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 d-flex align-items-center flex-column justify-content-center mt-3 col1 text-center">
          <h2>Discover a World of Shopping Delights</h2>
          <p className="HomeTitle">Get a perfect and luxtrious looks with us</p>
          <Link to="/products">
            <button className=" HomeBtn">
              <span className="mx-2">
                <i class="bi bi-emoji-wink"></i>
              </span>
              Shop Now
              <span>
                <i class="bi bi-arrow-right"></i>
              </span>
            </button>
          </Link>
        </div>
        <div className="col-sm-6">
          <img className=" heroImg" src={HomeImg} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Home
