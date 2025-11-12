import { useRef } from "react";

export default function CartProduct({ id, name, price, quantity, handleBuy, handleRemove }) {
    const quantityChanged = useRef(null);

    return (
        <div className="cart product">
            <span>{name}: </span>
            <span>${price} x </span>
            <input required ref={quantityChanged} id="quantity" type="number" className="input setProductQuantity" min="1" max="9" defaultValue={quantity} onInput={() => {
                handleBuy({ id: id, name: name, price: price, quantity: Number(quantityChanged.current.value) })
            }}/>
            <span>Subtotal: ${(quantity * price).toFixed(2)} </span>
            <button className="button removeProduct" onClick={() => {handleRemove({ id: id, name: name })}}>X</button>
        </div>
    )
}