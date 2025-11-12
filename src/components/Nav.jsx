import { NavLink } from 'react-router-dom';

export default function Nav( { cart } ) {
    let total = cart.reduce((sum, item) => {
        return sum += item.quantity
    }, 0)

    return (
        <nav className="primary-header">
            <NavLink to={`/`}>Store</NavLink>
            <NavLink to={`/about`}>About</NavLink>
            <NavLink to={`/contact`}>Contact</NavLink>
            <NavLink to={`/cart`}>
                <div className="cart icon">
                    Cart
                    <div className="cart bubble">
                        {total}
                    </div>
                </div>
            </NavLink>
        </nav>
    )
}