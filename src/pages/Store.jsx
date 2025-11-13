import { useOutletContext } from 'react-router';
import '../styles/Store.css';
import ProductList from '../components/ProductList';

export default function Store() {
    const { inventory, cart, handleBuy, handleRemove } = useOutletContext();

    return (
        <>
            { inventory && <ProductList className="storeInventory" inventory={inventory} cart={cart} handleBuy={handleBuy} handleRemove={handleRemove}/> }
        </>
    )
}