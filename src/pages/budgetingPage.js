import React from "react";
import UserDetails from "../Components/UserDetails.js";
import { motion } from "framer-motion";

class budgetingPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {

    const tansition1 = {
      in: {
        opacity: 1,
        y:"0%"
      },
      out: {
        opacity: 0,
        y:"100%"
      },
    };

    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={tansition1}
        transition={{ duration: 0.42 }}
      >
        <React.Fragment>
          <div className="text-black min-height-100vh">
            <div className="padding-verticle-84px">
              <div className="margin-top-48px"></div>
              <UserDetails />
            </div>
          </div>
        </React.Fragment>
      </motion.div>
    );
  }
}

export default budgetingPage;