// import { useState } from "react";
import { useOutletContext } from 'react-router';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';
// import Cart from '../components/Cart';

export default function Store() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");
    const { /*cart, setCart,*/ handleBuy, handleRemove } = useOutletContext();

    // function handleBuy(product) {
    //     console.log('handleBuy ran, product:', product, ' cart: ', cart)
    //
    //     const old = cart.filter((oldProduct) => oldProduct.id !== product.id)
    //
    //     setCart([...old, product])
    // }
    //
    // function handleRemove(product) {
    //     console.log('handleRemove ran, product:', product, ' cart: ', cart)
    //
    //     const filtered = cart.filter((oldProduct) => oldProduct.id !== product.id)
    //
    //     setCart([...filtered])
    // }

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            { inventory && <ProductList inventory={inventory} handleBuy={handleBuy} handleRemove={handleRemove} /> }
        </>
    )
}