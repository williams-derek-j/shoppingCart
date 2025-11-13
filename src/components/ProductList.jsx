import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

export default function ProductList({ className='', inventory, cart, handleBuy, handleRemove }) {
    return (
        <div className={`${className}`}>
            {inventory.map(product => (
                <ProductCard key={product.id}
                             className="ProductCard"
                             id={product.id}
                             name={product.name}
                             price={product.price}
                             img={product.imgUrl}
                             inCart={cart.some(inCart => inCart.id === product.id)}
                             quantityCurr={cart.some(inCart => inCart.id === product.id) ?
                                 cart.filter(inCart => inCart.id === product.id)[0].quantity
                                 : 1}
                             handleBuy={handleBuy}
                             handleRemove={handleRemove}/>
            ))}
        </div>
    )
}