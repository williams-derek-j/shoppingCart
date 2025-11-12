import {useRef, useState} from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ id, name, price, img, handleBuy, handleRemove }) {
    const quantity = useRef(null);

    const [inCart, setInCart] = useState(false);

    return (
        <div className="productCard">
            <img src={img}/>
            <div className="container tongue">
                <h2>{name}</h2>
                <h3>${price}</h3>
                <div className="container quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input required ref={quantity} id="quantity" type="number" className="input setProductQuantity" min="1" max="9" defaultValue="1" onChange={() => {
                        if (inCart) {
                            handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                        }
                    }}/>
                </div>
                <div className="container button">
                    {inCart === false && <button className="button buyProduct" onClick={() => {
                        handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                        setInCart(true);
                    }}>Buy</button>}
                    {inCart === true && <button className="button removeProduct" onClick={() => {
                        handleRemove({ id: id, name: name })
                        setInCart(false)
                        quantity.current.value = 1;
                    }}>X</button>}
                </div>
            </div>
        </div>
    )
}