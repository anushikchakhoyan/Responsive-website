import React from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";

import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

const PublicRoute = ({children, ...rest}) => (
    <>
        <AppHeader/>
        <div className="app-layout-height">
            <Route exact {...rest} children={children}/>
        </div>
        <AppFooter/>
    </>
)

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PublicRoute;
