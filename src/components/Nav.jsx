import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <NavLink to={`/`}>Store</NavLink>
            <NavLink to={`/about`}>About</NavLink>
            <NavLink to={`/contact`}>Contact</NavLink>
            <NavLink to={`/cart`}>Cart</NavLink>
        </div>
    )
}