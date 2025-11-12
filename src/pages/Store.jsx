import { useOutletContext } from 'react-router';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

export default function Store() {
    const { data: inventory, isPending, error } = useFetch("http://localhost:8000/items");
    const { cart, setCart } = useOutletContext();

    function handleBuy(item) {
        console.log('handleBuy ran, item:', item, ' cart: ', cart)

        const old = cart.filter((oldItem) => oldItem.id !== item.id)

        setCart([...old, item])
    }

    function handleRemove(item) {
        console.log('handleRemove ran, item:', item, ' cart: ', cart)

        const filtered = cart.filter((oldItem) => oldItem.id !== item.id)

        setCart([...filtered])
    }

    return (
        <>
            { isPending && <h2>Loading...</h2> }
            { error && <h2>error</h2>}
            { inventory && <ProductList inventory={inventory} handleBuy={handleBuy} handleRemove={handleRemove} /> }
        </>
    )
}