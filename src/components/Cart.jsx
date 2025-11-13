import '../styles/Cart.css'
import CartProduct from './CartProduct.jsx'

export default function Cart({ className = '', cart, handleBuy, handleRemove }) {
    console.log('cart mounted, cart:', cart)

    const priceTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className={`${className} flow_0_25`}>
            <h2 className="cartHeader">CART</h2>
            <div className="container CartProductContainer">
                {cart.sort((a, b) => a.quantity - b.quantity).map(product => (
                    <CartProduct className="CartProduct" key={product.id} id={product.id} name={product.name} price={product.price} quantityCurr={product.quantity} img={product.imgUrl} handleBuy={handleBuy} handleRemove={handleRemove}/>
                ))}
            </div>
            <div className="cartPriceContainer">
                <h2 className="cartPriceLabel">TOTAL BEFORE TAXES:</h2>
                <h2 className="cartPrice">${priceTotal.toFixed(2)}</h2>
            </div>
        </div>
    )
}