import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {

    const [nav, showNav] = useState(true);

    function clicked() {
        if (nav) {
            showNav(false)
        } else {
            showNav(true)
        }
    }

    return (
        <div className="navbar">
            <i onClick={clicked} className="fa-solid fa-bars mobileMenu hide show"></i>
            <ul className="navBarList">
                <NavLink to="/" end><li className="navBarListItem">HOME</li></NavLink>
                <NavLink to="/about"><li className="navBarListItem">ABOUT</li></NavLink>
                <NavLink to="/characters"><li className="navBarListItem">CHARACTERS</li></NavLink>
                <NavLink to="/blog"><li className="navBarListItem">BLOG</li></NavLink>
                <Link to="https://monumentcomicsworld.com/collections/all" target="_blank" rel="noopener noreferrer"><li className="navBarListItem">SHOP</li></Link>
            </ul>

            {nav ? ""

                :

                <ul className="navBarListMobile">

                    <div className="navBarIconsMobile">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="navBarSocialIconMobile fa-brands fa-square-instagram"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="navBarSocialIconMobile fa-brands fa-square-twitter"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="navBarSocialIconMobile fa-brands fa-youtube"></i></a>
                        <a href="mailto:bhood@monumentcomicsworld.com"><i className="navBarEmailIconMobile fa-solid fa-envelope"></i></a>
                    </div>

                    <NavLink to="/" end><li className="navBarListItemMobile">HOME</li></NavLink>
                    <NavLink to="/about"><li className="navBarListItemMobile">ABOUT</li></NavLink>
                    <NavLink to="/characters"><li className="navBarListItemMobile">CHARACTERS</li></NavLink>
                    <NavLink to="/blog"><li className="navBarListItemMobile">BLOG</li></NavLink>
                    <Link to="https://monumentcomicsworld.com/collections/all" target="_blank" rel="noopener noreferrer"><li className="navBarListItemMobile">SHOP</li></Link>
                </ul>}
        </div>
    )
}

export default NavBar;