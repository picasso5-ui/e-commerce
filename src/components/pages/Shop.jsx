import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'
import './Shop.css'
import { Link } from 'react-router-dom'
import MyContext from '../../contexts/shopContext'
import { useContext } from 'react'

export default function Shop({ product }) {
  const { addToCart } = useContext(MyContext)

  return (
    <div className=" card-parent">
      <Card style={{ width: '18rem' }} className="card">
        <Card.Body className="card-Body">
          <Card.Title>product</Card.Title>
          <Card.Text>
            <Link to={`/productDetails/${product.id}`}>
              <img className="productimg" src={product.image} alt="items" />
            </Link>
          </Card.Text>
          <p className="priceTag">${product.price}</p>

          <Button onClick={() => addToCart(product)} className="AddToCartBtn">
            Add To cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
