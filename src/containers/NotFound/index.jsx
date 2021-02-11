import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";

const NotFound = () => (
   <div className="not-found-wrapper d-flex justify-content-center align-items-center">
       <p>
           OOPS! Page Not Found <br />
           We are sorry, but the page you requested was not found <br />
           <Link to="/" className="mt-5 d-block">
               <button className="font-weight-bold app-orange-button">Go Back home</button>
           </Link>
       </p>
   </div>
);

export default NotFound;
