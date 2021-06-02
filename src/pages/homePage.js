import { Link, NavLink } from "react-router-dom";
import { animatePresence, motion } from "framer-motion";

import Heros from "../Components/Heros";
import React from "react";
import Transitions from "../utility/transitions"

class HomePage extends React.Component {
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
        transition={{ duration: 0.62 }}>
        
        <Heros/>

        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={transition.getTransition()}
        transition={{ duration: 0.9 }}>
        <div className="bg-white bg-shadow-up pt-1">
          <div className="container py-5 px-5 mt-5">
            <div className="row text-center">
              <div className="col-lg-4">
                <h2 className="mb-4">Education</h2>
                <img
                  className="mb-4 max-width-170px"
                  src="./Assets/Images/book.svg"
                />
                <p className="mb-4">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit.
                </p>
                <p>
                  <NavLink
                    className="btn btn-primary mt-2"
                    to="/education"
                    role="button"
                  >
                    View details »
                  </NavLink>
                </p>
              </div>
              <div className="col-lg-4">
                <h2 className="mb-4">Budgeting</h2>
                <img
                  className="mb-4 max-width-170px"
                  src="./Assets/Images/growthSvg.svg"
                />
                <p className="mb-5">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit.
                </p>
                <p>
                  <a className="btn btn-primary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <h2 className="mb-4">About</h2>
                <img
                  className="mb-4 max-width-170px"
                  src="./Assets/Images/me.svg"
                />
                <p className="mb-5">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit.
                </p>
                <p>
                  <a className="btn btn-primary mt-1" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </motion.div>
    );
  }
}
export default HomePage;