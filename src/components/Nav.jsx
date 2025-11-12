import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="primary-header">
            <NavLink to={`/`}>Store</NavLink>
            <NavLink to={`/about`}>About</NavLink>
            <NavLink to={`/contact`}>Contact</NavLink>
            <NavLink to={`/cart`}>Cart</NavLink>
        </nav>
    )
}