import EduCards from "../Components/EduCards.js";
import React from 'react';
import { motion } from "framer-motion";

class educationPage extends React.Component {
  state = {
    userName: localStorage.getItem("userName"),
  };

  
  render() {
    const tansition1 = {
      in: {
        opacity: 1,
        y: "0%",
      },
      out: {
        opacity: 0,
        y: "100%",
      },
    };

    if (this.state.userName != null) {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={tansition1}
          transition={{ duration: 0.62 }}
        >
          <div className="Education text-black min-height-100vh padding-bottom-84px">
            <div className="container pt-4 text-white">
              <div className="row margin-top-64px">
                <div className="col-lg-6">
                  <div className="v-align">
                  <h1 className="mb-2">
                    Hello {this.state.userName},
                    </h1>
                    <h2 className="mb-4">Welcome to finance education <br></br> at your own pace</h2>
                    <p className="mb-0">
                      Please in your own time feel free to go through each of the offered modules 
                      listed below about general finance and how to get the upper hand in order to better yourself financially for the future.
                    </p>
                    
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    className="width100 mb-5 v-align"
                    src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                  />
                </div>
              </div>
            </div>

            <EduCards />
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={tansition1}
          transition={{ duration: 0.62 }}
        >
          <div className="Education text-black min-height-100vh padding-bottom-84px">
            <div className="container pt-4 text-white">
              <div className="row margin-top-64px">
                <div className="col-lg-7">
                  <div className="v-align">
                    <h1 className="mb-3">
                      Financial Education <br></br>at your pace
                    </h1>
                    <p>
                      Use our free education services and budgeting tools to
                      better yourself financially for the future. Being an
                      academic means I don't wield power over person, place or
                      thing. I don't command armies; I don't lead labor unions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 text-center">
                  <img
                    className="width100 mb-5 v-align"
                    src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                  />
                </div>
              </div>
            </div>

            <EduCards />
          </div>
        </motion.div>
      );
    }
  }
}
export default educationPage;
