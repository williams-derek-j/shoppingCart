// import { useState } from "react";
import { useOutletContext } from 'react-router';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';
// import Cart from '../components/Cart';

export default function Store() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");
    const { cartContents, handleBuy, handleRemove } = useOutletContext();

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            { inventory && <ProductList inventory={inventory} cartContents={cartContents} handleBuy={handleBuy} handleRemove={handleRemove} /> }
        </>
    )
}