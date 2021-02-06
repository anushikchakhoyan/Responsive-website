import React from "react";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/all";
import ExternalLink from "../ExternalLink";

const SocialIcons = () => (
    <div className="d-flex justify-content-between align-items-center">
        <ExternalLink to="#" className="social-icon">
            <FaYoutube/>
        </ExternalLink>
        <ExternalLink to="#" className="social-icon">
            <FaInstagram/>
        </ExternalLink>
        <ExternalLink to="#" className="social-icon">
            <FaFacebookF/>
        </ExternalLink>
        <ExternalLink to="#" className="social-icon">
            <FaTwitter/>
        </ExternalLink>
    </div>
)

export default SocialIcons;
