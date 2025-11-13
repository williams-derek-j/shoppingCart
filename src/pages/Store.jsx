import { useOutletContext } from 'react-router';
import '../styles/Store.css';
import ProductList from '../components/ProductList';

export default function Store() {
    const { inventory, cartContents, handleBuy, handleRemove } = useOutletContext();

    return (
        <>
            { inventory && <ProductList className="storeInventory" inventory={inventory} cartContents={cartContents} handleBuy={handleBuy} handleRemove={handleRemove}/> }
        </>
    )
}