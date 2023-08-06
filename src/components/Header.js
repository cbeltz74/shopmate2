import { BrowserRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";


export const Header = () => {
  return (
    <header>
        <Link>
            <img src={Logo} alt="" />
            <span>Shopmate</span>
        </Link>
    </header>
  )
}
