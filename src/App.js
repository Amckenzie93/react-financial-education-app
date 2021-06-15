import React, { useEffect, useRef } from 'react';
import { Route, Switch } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import BudgetingPage from "./pages/budgetingPage.js";
import EducationPage from "./pages/educationPage.js";
import Footer from "./sharedPages/Footer.js";
import Header from "./sharedPages/Header.js";
import HomePage from "./pages/homePage.js";
import settingsPage from "./pages/settingsPage.js";

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
            {/* AnimatePresence from framer-motion is a library allowing react components to mount and 
            dismount in an animated fashion when changed occur in this case at the router level */}
            <AnimatePresence exitBeforeEnter>
              {/* react-router-dom switch to allow access to each page within the dom to minic page changes
               without reloading the page or the app. */}
              <Switch> 
                {/* defines what pages and or rather class components to use as a url path.*/}
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/education" exact component={EducationPage}></Route>
                <Route path="/budgeting" exact component={BudgetingPage}></Route>
                <Route path="/settings" exact component={settingsPage}></Route>
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