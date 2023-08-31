import "./navbar.css"
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navBarList">
                <NavLink to="/" end><li className="navBarListItem">HOME</li></NavLink>
                <NavLink to="/about"><li className="navBarListItem">ABOUT</li></NavLink>
                <NavLink to="/characters"><li className="navBarListItem">CHARACTERS</li></NavLink>
                <NavLink to="/blog"><li className="navBarListItem">BLOG</li></NavLink>
                <Link to="https://monumentcomicsworld.com/collections/all" target="_blank" rel="noopener noreferrer"><li className="navBarListItem">SHOP</li></Link>
            </ul>
        </div>
    )
}

export default NavBar;