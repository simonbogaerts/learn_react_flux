import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => (
  <div className="jumbotron">
    <h1>PluralSight Administration</h1>
    <p>React, Flux and React-Router for ultra responsive web apps.</p>
    <Link to="about" className="btn btn-primary">
      About
    </Link>
  </div>
);

/* default is used when returning a single function. */
export default HomePage;
