import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Nav, Navbar, InputGroup} from "react-bootstrap";
import {FaSearch, AiOutlineMenu, IoMdClose} from "react-icons/all";

import Logo from "../../assets/logo.png";
import "./index.scss";

const {Brand, Collapse, Toggle} = Navbar;
const {Link} = Nav;

const AppHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [toggleSearch, setToggleSearch] = useState(true);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top"
                    className="d-flex justify-content-between py-3 navigation">
                <Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(!toggleMenu)}>
                    {toggleMenu ? <AiOutlineMenu className="text-white"/> :
                        <IoMdClose className="text-white"/>}
                </Toggle>
                <Brand as={NavLink} to="/" className={toggleMenu ? 'visible' : 'invisible'}>
                    <img src={Logo} alt="Fatlinker logo" className="app-logo"/>
                </Brand>
                <div className={`sm ${toggleMenu ? 'visible' : 'invisible'}`}>
                    <FaSearch className="text-white"/>
                </div>
                <Collapse id="responsive-navbar-nav" className="custom-collapse">
                    <Nav>
                        <Link as={NavLink} to="/products" activeClassName="active">Products</Link>
                        <Link as={NavLink} to="/favorites" activeClassName="active">Favorites</Link>
                        <Link as={NavLink} to="/contact-us" activeClassName="active">Contact</Link>
                    </Nav>
                    <Nav>
                        <InputGroup className="pl-5 md">
                            <InputGroup.Prepend onClick={() => setToggleSearch(!toggleSearch)}
                                                className="cursor-pointer align-items-center">
                                <FaSearch className="text-white"/>
                            </InputGroup.Prepend>
                            <input type="text"
                                   className={`custom-input ${toggleSearch ? 'opened' : 'closed'}`}
                                   placeholder="Search"/>
                        </InputGroup>
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
