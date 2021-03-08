import React from "react";
import { motion } from "framer-motion";

class educationPage extends React.Component {
  state = {};

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

    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={tansition1}
        transition={{ duration: 0.42 }}
      >
        <div className="hero bg-purple-grad text-white">
          <div className="container pt-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <h1 className="mb-3">Conquer Finance</h1>
                  <p>
                    Use our free education services and budgeting tools to
                    better yourself financially for the future
                  </p>
                  <a
                    className="btn btn-primary mt-2"
                    to="/education"
                    role="button"
                  >
                    Start for free
                  </a>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100 mb-5"
                  src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-4">
            <div className="card-group">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default educationPage;
