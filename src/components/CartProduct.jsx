import { useEffect, useRef } from "react";
import '../styles/CartProduct.css'

export default function CartProduct({ className='', id, name, price, quantityCurr, handleBuy, handleRemove }) {
    const quantity = useRef(null);

    useEffect(() => {
        console.log('ProductCard rendered, currQ:', quantityCurr)

        let quantityOld = Number(quantity.current.value)
        if (quantityOld > 0) {
            if (quantityOld !== quantityCurr) {
                quantity.current.value = quantityCurr
            }
        }
    },[quantityCurr])

    return (
        <div className={`${className} flow_0_25h`}>
            <span>{name}:</span>
            <span>${price} x</span>
            <input required ref={quantity} id="quantity" type="number" className="input setProductQuantity" min="1" max="9" defaultValue={quantityCurr} onInput={() => {
                handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
            }}/>
            <span>Subtotal: ${(quantityCurr * price).toFixed(2)}</span>
            <button className="button productButton removeCartProduct" onClick={() => {handleRemove({ id: id, name: name })}}>X</button>
        </div>
    )
}