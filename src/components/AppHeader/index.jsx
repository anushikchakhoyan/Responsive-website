import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {AiOutlineMenu, IoMdClose} from "react-icons/all";

import GlobalSearch from "../GlobalSearch";
import Logo from "../../assets/logo.svg";
import "./index.scss";

const {Brand, Collapse, Toggle} = Navbar;
const {Link} = Nav;

const AppHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top"
                    className="d-flex justify-content-between py-3 navigation">
                <Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(!toggleMenu)}>
                    {toggleMenu ? <IoMdClose className="text-white"/> : <AiOutlineMenu className="text-white"/> }
                </Toggle>
                <Brand as={NavLink} to="/" className={toggleMenu ? 'logo-invisible' : 'logo-visible'}>
                    <img src={Logo} alt="Fatlinker logo" className="app-logo"/>
                </Brand>
                <div className="empty-cell"/>
                <Collapse id="responsive-navbar-nav" className="custom-collapse">
                    <Nav>
                        <Link as={NavLink} to="/products" activeClassName="active">Products</Link>
                        <Link as={NavLink} to="/favorites" activeClassName="active">Favorites</Link>
                        <Link as={NavLink} to="/contact-us" activeClassName="active">Contact</Link>
                    </Nav>
                    <Nav className="actions-wrapper">
                        <GlobalSearch />
                        <Link as={NavLink} to="/subscribe">
                            <button className="font-weight-bold app-orange-button">Subscribe</button>
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default AppHeader;
