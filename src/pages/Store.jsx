import { useOutletContext } from 'react-router';
import useFetch from '../hooks/useFetch';
import '../styles/Store.css';
import ProductList from '../components/ProductList';

export default function Store() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");
    const { cartContents, handleBuy, handleRemove } = useOutletContext();

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            { inventory && <ProductList className="storeInventory" inventory={inventory} cartContents={cartContents} handleBuy={handleBuy} handleRemove={handleRemove} /> }
        </>
    )
}