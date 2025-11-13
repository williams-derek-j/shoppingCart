import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav( { cart, handleShowCart } ) {
    let total = cart.reduce((sum, product) => {
        return sum += product.quantity
    }, 0)

    const cartIcon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          className="lucide lucide-shopping-cart-icon lucide-shopping-cart">
        <circle cx="8" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>)

    return (
        <nav className="primary-header">
            <NavLink to={`/`}>Store</NavLink>
            <NavLink to={`/about`}>About</NavLink>
            <NavLink to={`/contact`}>Contact</NavLink>
            <button className="button CartToggle" onClick={() => handleShowCart()}>
                <div className="icon CartIcon">
                    { cartIcon }
                    { total > 0 &&
                        <div className="bubble CartIconBubble">
                            <span className={ total >= 10 && total <= 99 ? 'doubleDigit' : total >= 100 ? 'tripleDigit' : ''}>{ total }</span>
                        </div>
                    }
                </div>
            </button>
        </nav>
    )
}