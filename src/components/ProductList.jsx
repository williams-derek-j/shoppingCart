import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

export default function ProductList({ className='', inventory, cartContents, handleBuy, handleRemove }) {
    return (
        <div className={`${className}`}>
            {inventory.map(product => (
                <ProductCard key={product.id} className="ProductCard" id={product.id} name={product.name} price={product.price} img={product.imgUrl} inCart={cartContents.some(inCart => inCart.id === product.id)} quantityCurr={cartContents.some(inCart => inCart.id === product.id) ? cartContents.filter(inCart => inCart.id === product.id)[0].quantity : 1} handleBuy={handleBuy} handleRemove={handleRemove}/>
            ))}
        </div>
    )
}