import '../styles/Cart.css'
import CartProduct from './CartProduct.jsx'

export default function Cart({ className = '', cart, handleBuy, handleRemove }) {
    console.log('cart mounted, cart:', cart)

    const priceTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className={`${className} flow_0_25`}>
            <span>CART:</span>
            <div className="container CartProductContainer">
                {cart.map(product => (
                    <CartProduct className="CartProduct" key={product.id} id={product.id} name={product.name} price={product.price} quantityCurr={product.quantity} img={product.imgUrl} handleBuy={handleBuy} handleRemove={handleRemove} />
                ))}
            </div>
            <span style={{ display: 'inline-block' }}>TOTAL BEFORE TAXES: ${priceTotal.toFixed(2)}</span>
        </div>
    )
}