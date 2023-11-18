import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form className="form">
        <h4>You can Login!</h4>
        <div>
          <input type="text" placeholder="Username" className="shadow" />
        </div>
        <div>
          <input type="text" placeholder="password" className="mb-3 shadow" />
        </div>
        <button className="shadow loginBtn">Login</button>
        <Link to="/signIn" className="text-primary text-decoration-underline">
          sign In
        </Link>
      </form>
    </div>
  )
}

export default Login
