import { NavLink } from "react-router-dom";
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container padding-bottom-10px">
          <div className="row">
            <div className="col-12 col-md text-center">
              <div className="max-width-185px margin-auto">
                <h5>Navigation links</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/education">Education</NavLink>
                  </li>
                  <li>
                    <NavLink to="/budgeting">Budgeting</NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings">Settings</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright">
            Copyright &copy; All rights reserved 2021 Adam Mckenzie
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
