import CartProduct from './CartProduct.jsx'

export default function Cart( { cart, handleBuy, handleRemove } ) {
    console.log('cart mounted, cart:', cart)

    const priceTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className="container cart">
            CART:
            {cart.map(product => (
                <CartProduct key={product.id} id={product.id} name={product.name} price={product.price} quantity={product.quantity} img={product.imgUrl} handleBuy={handleBuy} handleRemove={handleRemove} />
            ))}
            TOTAL BEFORE TAXES: ${priceTotal.toFixed(2)}
        </div>
    )
}