import { DataHandler } from "../Services/clientDataHandler"
import { NavLink } from "react-router-dom";
import React from 'react';

class Header extends React.Component {
  
  constructor() {
    super();
    this.state = {}
  }

  mobileToggle = (event) => {
    document.getElementById("navbarNav").classList.toggle("collapse");
    document.getElementById("MainContent").classList.toggle("blur");
  }

  closeOnClick = (event) => {
    document.getElementById("navbarNav").classList.add("collapse");
    document.getElementById("MainContent").classList.remove("blur");
  }

  render(){

    let dataHandlerService = DataHandler.getInstance();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <script scr="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        <NavLink className="navbar-brand" to="/"></NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.mobileToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.mobileToggle}
        >X</button>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" exact onClick={this.closeOnClick}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/education" activeClassName="active" exact onClick={this.closeOnClick}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/budgeting" activeClassName="active" exact onClick={this.closeOnClick}>
                Budgeting
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/settings" activeClassName="active" exact onClick={this.closeOnClick}>
              Settings
            </NavLink>
          </li>
          </ul>
        </div>
        <div className="glossOver"></div>
      </nav>
    );
  }

}

export default Header;