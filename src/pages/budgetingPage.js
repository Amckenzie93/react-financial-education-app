import Heros from "../Components/Heros";
import React from "react";
import Transitions from "../utility/transitions"
import UserDetails from "../Components/UserDetails.js";
import { motion } from "framer-motion";

class budgetingPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    let transition = Transitions.getInstance();

    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={transition.getTransition()}
        transition={{ duration: 0.62 }}
      >
        <React.Fragment>
          <div className="text-black min-height-100vh">
            <div className="padding-verticle-84px">
              <div className="container pt-4 text-white margin-bottom-64px">
              <div className="row">
                <div className="col-lg-6">
                  <div className="v-align">
                  <h1 className="mb-2">
                    Your Dashboard
                    </h1>
                    <p className="mb-0">
                      Please use the dashboard offered to enter your financial information so that you can tweak it and adjust so that you can see a rough estimation of the impact it has had over 50 years.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    className="width100 mb-5 v-align"
                    src="./Assets/Images/me.svg"
                  />
                </div>
              </div>
            </div>
              <UserDetails />
            </div>
          </div>
        </React.Fragment>
      </motion.div>
    );
  }
}

export default budgetingPage;