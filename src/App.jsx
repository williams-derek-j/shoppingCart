import { useState, useEffect } from 'react'
import { Outlet } from "react-router";
import './styles/App.css'
import Nav from './components/Nav';
import Cart from "./components/Cart.jsx";
import useFetch from "./hooks/useFetch.js";

export default function App() {
    console.log('App rendered')

    const [ displayIsMobile , setDisplayIsMobile ] = useState(false)

    const { data: inventory, isPending, error } = useFetch("https://fakestoreapi.com/products");

    const [ cart, setCart ] = useState([])
    const [ showCart, setShowCart ] = useState(false);

    function handleShowCart() {
        console.log('handleShowCart ran')

        setShowCart(!showCart)
    }

    function handleBuy(product) {
        console.log('handleBuy ran, product:', product, ' cart (before): ', cart)

        const filtered = cart.filter((inCart) => inCart.id !== product.id)

        setCart([...filtered, product])
    }

    function handleRemove(product) {
        console.log('handleRemove ran, product:', product, ' cart (before): ', cart)

        const filtered = cart.filter((inCart) => inCart.id !== product.id)

        setCart([...filtered])
    }

    useEffect(() => {
        window.matchMedia("(width <= 576px").onchange = (e) => {
            if (e.matches) {
                setDisplayIsMobile(true)
            } else {
                setDisplayIsMobile(false)
            }
        };
    }, [])

    return (
        <>
            <Nav cart={ cart } handleShowCart={ handleShowCart }/>
            <div className="content">
                { isPending && <h2>Loading...</h2> }
                { error && <h2>error</h2> }

                { !displayIsMobile && inventory && <Outlet context={{ inventory, cart, handleBuy, handleRemove }}/> }
                { !displayIsMobile && showCart && <Cart className="Cart" cart={ cart } handleBuy={ handleBuy } handleRemove={ handleRemove }/> }
                { /* or*/ }
                { displayIsMobile && showCart && <Cart className="Cart" cart={ cart } handleBuy={ handleBuy } handleRemove={ handleRemove }/> }
                { displayIsMobile && inventory && <Outlet context={{ inventory, cart, handleBuy, handleRemove }}/>}
            </div>
        </>
    )
}