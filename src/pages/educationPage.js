import Banner from "../Components/Banner";
import EduCards from "../Components/EduCardCollection.js";
import React from 'react';
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class educationPage extends React.Component {
  state = {
    userName: localStorage.getItem("userName"),
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let transition = Transitions.getInstance();

    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={transition.getTransition()}
        transition={{ duration: 0.75 }}
      >
        <div className="Education text-black min-height-100vh padding-verticle-84px">
          
          {/* render Banner component with props data */}
          <Banner
          title={"Hello"}
          usersName={this.state.userName}
          subTitle={" Welcome to finance education at your own pace"}
          paragraph={"Please in your own time feel free to go through each of the offered modules listed below about general finance and how to get the upper hand in order to better yourself financially for the future."}
          image={"./Assets/Images/2.svg"}/>

          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 1 }}
          >
            {/* Render EduCards component which is a collection of edu card components aka the lessons*/}
            <EduCards />
          </motion.div>
        </div>
      </motion.div>
    );
  }

}
export default educationPage;
