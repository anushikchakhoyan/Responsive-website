import React from "react";
import {Link} from "react-router-dom";

const AppFooterNav = () => (
    <div className="d-flex flex-wrap justify-content-between footer-nav-list">
        <ul className="footer-list p-0">
            <p>Services</p>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Services</Link></li>
        </ul>
        <ul className="footer-list p-0">
            <p>Software</p>
            <li><Link to="/">Software</Link></li>
            <li><Link to="/">Software</Link></li>
            <li><Link to="/">Software</Link></li>
            <li><Link to="/">Software</Link></li>
        </ul>
        <ul className="footer-list p-0">
            <p>Contact</p>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    </div>
)

export default AppFooterNav;
