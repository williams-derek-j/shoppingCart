import '../styles/Cart.css'
import CartProduct from './CartProduct.jsx'

export default function Cart({ className = '', cart, handleBuy, handleRemove }) {
    console.log('cart mounted, cart:', cart)

    const priceTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className={`${className} flow_0_25`}>
            <h2 className="CartHeader">CART</h2>
            <div className="container CartProductContainer">
                {cart.sort((a, b) => a.id - b.id).map(product => (
                    <CartProduct className="CartProduct" key={product.id} id={product.id} name={product.name} price={product.price} quantityCurr={product.quantity} img={product.imgUrl} handleBuy={handleBuy} handleRemove={handleRemove}/>
                ))}
            </div>
            <div className="container CartPriceContainer">
                <h2 className="CartPriceLabel">TOTAL BEFORE TAXES{"\u00A0".repeat(12)}</h2>
                <h2 className="CartPrice">${priceTotal.toFixed(2)}</h2>
            </div>
        </div>
    )
}