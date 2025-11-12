import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

export default function Store({ cart, setCart}) {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");

    function handleBuy(item) {
        console.log('handleBuy ran, item:', item)

        const old = cart.filter((oldItem) => oldItem.id !== item.id)

        setCart([...old, item])
    }

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            { inventory && <ProductList inventory={inventory} handleBuy={handleBuy} /> }
        </>
    )
}