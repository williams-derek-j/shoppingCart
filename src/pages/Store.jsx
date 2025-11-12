import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

export default function Store() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");

    console.log('ii',inventory.items, inventory)

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            {/*{ inventory && <ProductList inventory={inventory.items} /> }*/}
        </>
    )
}