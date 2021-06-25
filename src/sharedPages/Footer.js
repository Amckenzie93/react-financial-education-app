import { NavLink } from "react-router-dom";
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md">
              <h5>Navigation links</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/budgeting">
                    Budgeting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings">
                    Settings
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Useful links</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="https://www.libf.ac.uk/" target="_blank">
                    The London Institue of banking and finance 
                  </a>
                </li>
                <li>
                  <a href="https://www.open.edu/openlearn/money-management/free-courses" target="_blank">
                    Open University free financial courses
                  </a>
                </li>
                <li>
                  <a href="https://www.wsj.com/market-data" target="_blank">
                   Wall street journal Market Data
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md"></div>
            <div className="col-6 col-md"></div>
            <div className="col-6 col-md"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
