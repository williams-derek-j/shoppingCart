import { useRef } from 'react'

export default function ProductCard({ id, name, price, img, handleBuy }) {
    const quantity = useRef(null);

    return (
        <div>
            <img src={img}/>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <label htmlFor="quantity">Quantity:</label>
            <input required ref={quantity} id="quantity" type="number" className="input quantity" min="1" max="9" defaultValue="1"/>
            <button onClick={() => { handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) }) }}>Buy</button>
        </div>
    )
}