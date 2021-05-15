import { Link, NavLink } from "react-router-dom";

import React from 'react';

class Header extends React.Component {
  render(){
    
    return (


      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
         
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/budgeting">
                Budgeting
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="glossOver"></div>
      </nav>
      
    );
  }
}

export default Header;