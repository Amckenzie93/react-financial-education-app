import React from "react";
import { motion } from "framer-motion";

class aboutPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <motion.div
      initial={{ opacity: 0, left: "-100%", position: "relative" }}
      animate={{ opacity: 1, left:0, position: "relative" }}
      exit={{ opcaity: 0, left: "150%", position: "relative" }}
      transition={{duration:0.42}}
      >
     about</motion.div>
    );
  }
}

export default aboutPage;
