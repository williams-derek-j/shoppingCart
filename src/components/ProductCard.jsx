import { useEffect, useRef } from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ className='', id, name, price, img, inCart, quantityCurr, handleBuy, handleRemove }) {
    const quantity = useRef(null);

    useEffect(() => {
        console.log('ProductCard rendered, currQ:', quantityCurr, ' inCart:', inCart)

        let quantityOld = quantity.current.value.length > 0 ? Number(quantity.current.value) : null
        if (quantityOld > 0) {
            if (quantityOld !== quantityCurr) {
                quantity.current.value = quantityCurr
            }
        }
    },[quantityCurr])

    return (
        <div className={`${className}`}>
            <img src={img}/>
            <div className="container tongue">
                <h2>{name}</h2>
                <h3>${price}</h3>
                <div className="container containerQuantity">
                    <label htmlFor="quantity">Quantity</label>
                    <input required ref={quantity} id="quantity" type="number" className="input setProductQuantity" min="1" defaultValue={quantityCurr} onChange={() => {
                        if (inCart) {
                            handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                        }
                    }}/>
                </div>
                <div className="container containerButton">
                    {inCart === false && <button className="button productButton buyProductCard" onClick={() => {
                        handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                    }}>Buy</button>}
                    {inCart === true && <button className="button productButton removeProductCard" onClick={() => {
                        handleRemove({ id: id, name: name })
                        quantity.current.value = 1;
                    }}>X</button>}
                </div>
            </div>
        </div>
    )
}