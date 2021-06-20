import { DataHandler } from "../Services/clientDataHandler"
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
    let dataHandlerService = DataHandler.getInstance();
    const data = dataHandlerService.getAllData();
    let transition = Transitions.getInstance();

    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={transition.getTransition()}
        transition={{ duration: 0.75 }}
      >
        <div className="Education text-black min-height-100vh padding-bottom-84px">
          <div className="container pt-4 text-white margin-bottom-64px">
            <div className="row margin-top-84px">
              <div className="col-lg-6">
                <div className="v-align">
                  <h1 className="mb-2">Hello {this.renderName(this.state.userName)}</h1>
                  <h2 className="mb-4">
                    Welcome to finance education <br></br> at your own pace
                  </h2>
                  <p className="mb-0">
                    Please in your own time feel free to go through each of the
                    offered modules listed below about general finance and how
                    to get the upper hand in order to better yourself
                    financially for the future.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  className="width100 mb-5 v-align"
                  src="./Assets/Images/2.svg"
                />
              </div>
            </div>
          </div>
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 1 }}
          >
            <EduCards />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  renderName = (name) => {
    if(name != null){
      return(
        name
      )
    }
  }

}
export default educationPage;
