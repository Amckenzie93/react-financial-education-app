import Banner from "../Components/Banner";
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

              {/* render Banner component with content passed in as props */}
              <Banner
              title={"Your Dashboard"}
              paragraph={"Please use the dashboard offered to enter your financial information so that you can tweak it and adjust so that you can see a rough estimation of the impact it has had over 50 years."}
              image={"./Assets/Images/me.svg"}/>

              {/* render UserDetails component */}
              <UserDetails />
            </div>
          </div>
        </React.Fragment>
      </motion.div>
    );
  }
}

export default budgetingPage;