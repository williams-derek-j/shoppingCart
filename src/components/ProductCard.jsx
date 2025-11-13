import { useEffect, useRef } from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ id, name, price, img, inCart, quantityCurr, handleBuy, handleRemove }) {
    const quantity = useRef(null);

    useEffect(() => {
        console.log('ProductCard rendered, currQ:', quantityCurr, ' inCart:', inCart)

        let quantityOld = quantity.current.value.length > 0 ? Number(quantity.current.value) : null
        if (quantityOld > 0) {
            if (quantityOld !== quantityCurr) {
                quantity.current.value = quantityCurr
            }
        }
    },[inCart, quantityCurr])

    return (
        <div className="productCard">
            <img src={img}/>
            <div className="container tongue">
                <h2>{name}</h2>
                <h3>${price}</h3>
                <div className="container quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input required ref={quantity} id="quantity" type="number" className="input setProductQuantity" min="1" max="9" defaultValue={quantityCurr} onChange={() => {
                        if (inCart) {
                            handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                        }
                    }}/>
                </div>
                <div className="container button">
                    {inCart === false && <button className="button buyProduct" onClick={() => {
                        handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                    }}>Buy</button>}
                    {inCart === true && <button className="button removeProduct" onClick={() => {
                        handleRemove({ id: id, name: name })
                        quantity.current.value = 1;
                    }}>X</button>}
                </div>
            </div>
        </div>
    )
}