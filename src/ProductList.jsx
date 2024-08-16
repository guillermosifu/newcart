
import { useCart } from "./CartContext";

const products =[
    {id:1,name:"prducto 1",price: 100},
    {id:2,name:"prducto 2",price: 120},
    {id:3,name:"prducto 3",price: 130},
]

const ProductList = () => {
    const {addToCart}=useCart()
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product=>(
            <li key={product.id}>
              <span>{product.name}-${product.price}</span>
              <button onClick={addToCart(product)}>Agregar al carro</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
