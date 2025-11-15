import { useEffect, useRef } from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ className='', id, name, price, description, img, inCart, quantityCurr, handleBuy, handleRemove }) {
    const quantity = useRef(null);

    description = `${description[0].toUpperCase()}${description.slice(1)}`; // capitalize first letter of description

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
            <div className="container containerImg ProductCardImgContainer">
                <img className="img ProductCardImg" src={img}/>
            </div>
            <div className="container tongue">
                <h2 className="h2 label ProductCardLabel">{name}</h2>
                <h3 className="h3 ProductCardPrice">${price}</h3>
                <p className="p ProductCardDescription">{description}</p>
                <div className="container ProductCardQuantityContainer">
                    <label className="label ProductCardQuantityLabel" htmlFor={`quantity${id}`}>Quantity:</label>
                    <input required ref={quantity} id={`quantity${id}`} type="number" className="input ProductCardQuantityInput" min="1" defaultValue={quantityCurr} onChange={() => {
                        if (inCart) {
                            handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                        }
                    }}/>
                </div>
                <div className="container ProductCardButtonContainer">
                    {inCart === false && <button className="button buttonProduct buttonProductBuy ProductCardButton ProductCardBuyButton" onClick={() => {
                        handleBuy({ id: id, name: name, price: price, quantity: Number(quantity.current.value) })
                    }}>Buy</button>}
                    {inCart === true && <button className="button buttonProduct buttonProductRemove ProductCardButton ProductCardRemoveButton" onClick={() => {
                        handleRemove({ id: id, name: name })
                        quantity.current.value = 1;
                    }}>X</button>}
                </div>
            </div>
        </div>
    )
}