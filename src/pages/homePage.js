import React from "react";
import { animatePresence, motion } from "framer-motion";
import {  Link, NavLink } from "react-router-dom";

class HomePage extends React.Component {
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
      transition={{duration:0.62}}
      >
        <div className="hero bg-purple-grad text-white">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4">
                <div className="v-align">
                <h1 className="mb-3">Conquer Finance</h1>
                <p>Use our free education services and budgeting tools to better yourself financially for the future</p>
                <NavLink className="btn btn-primary mt-2" to="/education" role="button">
                  Start for free
                </NavLink>
                </div>
            </div>
            <div className="col-lg-8 text-center"> 
                <img className="width100 mb-5" src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"/></div>
          </div>
        </div>
        </div>

        <div className="container py-5 px-5 mt-5">
          <div className="row text-center">
            <div className="col-lg-4">
              <h2 className="mb-4">Education</h2>
              <p className="mb-5">
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-primary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <h2 className="mb-4">Budgeting</h2>
              <p className="mb-5">
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-primary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <h2 className="mb-4">About</h2>
              <p className="mb-5">
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-primary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container pb-5 pb-5 mb-5">
          <hr></hr>
          <div className="row my-5 text-center">
            <div className="col-lg-12 col-md">
              <h2>Some introduction about guff</h2>
              <p>
                {" "}
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh.
              </p>
              <img className="mt-4" src="./Assets/Images/1.webp" width="100%" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default HomePage;
