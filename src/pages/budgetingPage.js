import React from "react";
import { motion } from "framer-motion";
import UserDetails from "../Components/UserDetails.js";

class budgetingPage extends React.Component {
  state = {};

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
      transition={{duration:0.42}}
      >
        <React.Fragment>
          <UserDetails />
        </React.Fragment>
      </motion.div>
    );
  }
}

export default budgetingPage;