import { useState, useEffect } from 'react'
import { Outlet } from "react-router";
import './styles/App.css'
import Nav from './components/Nav';
import Cart from "./components/Cart.jsx";
import useFetch from "./hooks/useFetch.js";

function App() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");

    const [ cart, setCart ] = useState([])
    const [ showCart, setShowCart ] = useState(false);

    function handleShowCart() {
        console.log('handleShowCart ran')

        setShowCart(!showCart)
    }

    function handleBuy(product) {
        console.log('handleBuy ran, product:', product, ' cart (before): ', cart)

        const old = cart.filter((oldProduct) => oldProduct.id !== product.id)

        setCart([...old, product])
    }

    function handleRemove(product) {
        console.log('handleRemove ran, product:', product, ' cart (before): ', cart)

        const filtered = cart.filter((oldProduct) => oldProduct.id !== product.id)

        setCart([...filtered])
    }

    useEffect(() => {
        console.log('App rendered')
    })

    return (
        <>
            <Nav cart={ cart } handleShowCart={ handleShowCart }/>
            <div className="content">
                { isPending && <h2>Loading...</h2> }
                { error && <h2>error</h2> }
                { inventory && <Outlet context={{ inventory, cart, handleBuy, handleRemove }}/> }
                { showCart && <Cart className="Cart" cart={ cart } handleBuy={ handleBuy } handleRemove={ handleRemove }/> }
            </div>
        </>
    )
}

export default App
