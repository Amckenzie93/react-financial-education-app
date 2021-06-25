import Heros from "../Components/Heros";
import NavLink from "react-router-dom";
import React from "react";
import Transitions from "../utility/transitions"
import motion from "framer-motion";

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
        transition={{ duration: 0.62 }}
      >
        <Heros />

        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.8 }}
        >
          <div className="pt-1">
            <div className="container py-1 px-4 mt-5">
              <div className="row text-center">
                <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={transition.getTransition()}
                  transition={{ duration: 1 }}
                  className="col-lg-6 margin-bottom-64px padding-24px">
                  <div className="card bg-white bg-shadow-up padding-64px">
                    <h2 className="mb-4">Education</h2>
                    <img
                      className="mb-4 max-height-140px"
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
                        View details
                      </NavLink>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={transition.getTransition()}
                  transition={{ duration: 1.175 }} 
                  className="col-lg-6 margin-bottom-64px padding-24px">
                  <div className="card bg-white bg-shadow-up padding-64px">
                    <h2 className="mb-4">Budgeting</h2>
                    <img
                      className="mb-4 max-width-140px"
                      src="./Assets/Images/growthSvg.svg"
                    />
                    <p className="mb-4">
                      Donec sed odio dui. Etiam porta sem malesuada magna mollis
                      euismod. Nullam id dolor id nibh ultricies vehicula ut id
                      elit.
                    </p>
                    <p>
                      <NavLink
                        className="btn btn-primary mt-2"
                        to="/budgeting"
                        role="button"
                      >
                        View details
                      </NavLink>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}
export default HomePage;