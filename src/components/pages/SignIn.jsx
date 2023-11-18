import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <form className="form">
        <h4>Sign In!</h4>
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
    </>
  )
}

export default SignIn
