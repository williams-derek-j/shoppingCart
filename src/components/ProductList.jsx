import ProductCard from './ProductCard.jsx'

export default function ProductList(inventory) {
    return (
        <div className="inventory-container">
            {inventory.map(item => (
                <ProductCard key={item.id} name={item.name} price={item.price} img={item.img}/>
            ))}
        </div>
    )
}