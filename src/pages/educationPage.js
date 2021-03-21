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
        <div className="Education text-black min-height-100vh padding-bottom-84px">

        <div className="container pt-4 text-white">
            <div className="row margin-top-84px">
              <div className="col-lg-7">
                <div className="v-align">
                  <h1 className="mb-3">Financial Education <br></br>at your pace</h1>
                  <p>
                    Use our free education services and budgeting tools to
                    better yourself financially for the future. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions.
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


          <div className="container pt-4">
            <div className="row py-4 px-2 bg-white border-radius-5">
              <div className="col-lg-2">
                <img
                  className="width100 py-1 px-1 v-align"
                  src="./Assets/Images/me.svg"
                />
              </div>
              <div className="col-lg-10">
                <h2 className="mb-3">Eduational items of interest</h2>
                <p className="mb-3">I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions.</p>
              </div>
            </div>

            <div className="row py-4 px-2 bg-white border-radius-5 margin-top-48px">
              <div className="col-lg-2">
                <img
                  className="width100 py-1 px-1 v-align"
                  src="./Assets/Images/me.svg"
                />
              </div>
              <div className="col-lg-10">
                <h2 className="mb-3">Eduational items of interest</h2>
                <p className="mb-3">I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions.</p>
              </div>
            </div>

            <div className="row py-4 px-2 bg-white border-radius-5 margin-top-48px">
              <div className="col-lg-2">
                <img
                  className="width100 py-1 px-1 v-align"
                  src="./Assets/Images/me.svg"
                />
              </div>
              <div className="col-lg-10 pr-5">
                <h2 className="mb-3">Eduational items of interest</h2>
                <p className="mb-3">I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default educationPage;
