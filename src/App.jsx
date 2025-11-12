import { useState } from 'react'
import { Outlet } from "react-router";
import './styles/App.css'
import Nav from './components/Nav';
import Cart from "./components/Cart.jsx";

function App() {
    const [ cart, setCart ] = useState([])
    const [ showCart, setShowCart ] = useState(false);

    function handleShowCart() {
        console.log('handleShowCart ran')

        setShowCart(!showCart)
    }

    function handleBuy(product) {
        console.log('handleBuy ran, product:', product, ' cart: ', cart)

        const old = cart.filter((oldProduct) => oldProduct.id !== product.id)

        setCart([...old, product])
    }

    function handleRemove(product) {
        console.log('handleRemove ran, product:', product, ' cart: ', cart)

        const filtered = cart.filter((oldProduct) => oldProduct.id !== product.id)

        setCart([...filtered])
    }

    return (
        <>
            <Nav cart={ cart } handleShowCart={ handleShowCart } />
            <div className="content">
                <Outlet context={{ cart, setCart, handleBuy, handleRemove }} />
                { showCart && <Cart className="cart" cart={ cart } handleBuy={ handleBuy } handleRemove={ handleRemove } /> }
            </div>
        </>
    )
}

export default App
