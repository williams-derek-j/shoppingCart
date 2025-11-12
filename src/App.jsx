import { useState } from 'react'
import { Outlet } from "react-router";
import './styles/App.css'
import Nav from './components/Nav';

function App() {
    const [cart, setCart] = useState([])

    return (
        <>
            <Nav cart={cart}/>
            <Outlet cart={cart} setCart={setCart} />
        </>
    )
}

export default App
