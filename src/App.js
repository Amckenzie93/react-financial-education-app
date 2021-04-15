import { AnimatePresence, motion } from "framer-motion";
//React libraries
import React, { useEffect, useRef } from 'react';
import { Route, Switch } from "react-router-dom";

import AboutPage from "./pages/aboutPage.js";
import BudgetingPage from "./pages/budgetingPage.js";
import EducationPage from "./pages/educationPage.js";
import Footer from "./sharedPages/Footer.js";
import Header from "./sharedPages/Header.js";
import HomePage from "./pages/homePage.js";

class BudgetApplicaion extends React.Component { 
  
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <div id="MainContent" className="bg-purple-grad">
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/education" exact component={EducationPage}></Route>
                <Route path="/budgeting" exact component={BudgetingPage}></Route>
                <Route path="/about" exact component={AboutPage}></Route>
              </Switch>
            </AnimatePresence>
            {/* <Footer /> */}
          </div>
        </React.Fragment>
      </div>
    );


  }
}



export default BudgetApplicaion;
