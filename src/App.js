import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/aboutPage.js";
import BudgetingPage from "./pages/budgetingPage.js";
import EducationPage from "./pages/educationPage.js";
import Footer from "./sharedPages/Footer.js";
//Components
import Header from "./sharedPages/Header.js";
//Pages
import HomePage from "./pages/homePage.js";
//React libraries
import React from "react";

class BudgetApplicaion extends React.Component {
  state = {
    count: 1
  };


  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
        </React.Fragment>

        <div id="MainContent" className="bg-purple-grad">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/education" exact component={EducationPage}></Route>
              <Route path="/budgeting" exact component={BudgetingPage}></Route>
              <Route path="/about" exact component={AboutPage}></Route>
            </Switch>
          </AnimatePresence>
        </div>

        {/*
        <React.Fragment>
            <Footer />
        </React.Fragment>
        */}
      </div>
    );
  }

}

export default BudgetApplicaion;
