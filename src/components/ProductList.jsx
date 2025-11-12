import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

export default function ProductList({ inventory, handleBuy, handleRemove }) {
    return (
        <div className="inventory container">
            {inventory.map(product => (
                <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} img={product.imgUrl} handleBuy={handleBuy} handleRemove={handleRemove} />
            ))}
        </div>
    )
}