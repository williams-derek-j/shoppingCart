import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

export default function ProductList({ inventory, handleBuy }) {
    return (
        <div className="inventory container">
            {inventory.map(item => (
                <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.imgUrl} handleBuy={handleBuy}/>
            ))}
        </div>
    )
}