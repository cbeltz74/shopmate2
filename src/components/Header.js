import { BrowserRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";


export const Header = () => {
  return (
    <header>
        <Link to="/" className="logo">
            <img src={Logo} alt="" />
            <span>Shopmate</span>
        </Link>

        <nav className="navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </nav>
    
        <Link to="/cart" className="items">
            <span>Cart: 2</span>
        </Link>
    
    </header>
  )
}
