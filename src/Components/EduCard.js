import { Link, NavLink } from "react-router-dom";

import React from "react";
import { motion } from "framer-motion";

class EduCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
  };
  }

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


    if (this.state.expanded === true) {
      return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={tansition1}
        transition={{ duration: 0.82 }}
      >
        <div className="container infoCard py-3 px-3 card margin-bottom-36px" onClick={this.expand}>
          <div className="py-4 px-2 bg-white border-radius-5">
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="width100 py-1 px-4 v-align"
                  src={this.props.imageUrl}
                  alt={this.props.alt}
                />
              </div>
              <div className="col-lg-9">
                  <h2 className="mb-2">{this.props.title}</h2>
                  <h4 className="mb-3">{this.props.subtitle}</h4>
                  <p className="mb-3">{this.props.paragraph}</p>
              </div>
            </div>
              <div className="row">
              <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <hr className="margin-bottom-28px"/>
                  <h4>The Context</h4>
                  <p>This lesson is aimed at I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic.</p>
                  <ul className="ml-0 pl-4">
                    <li>some topic point</li>
                    <li>some topic point</li>
                    <li>some topic point</li>
                  </ul>  
                  <NavLink
                    className="btn btn-primary mt-2"
                    to="/education"
                    role="button"
                  >
                    Start the Lesson 
                  </NavLink>
                </div>
              </div>
          </div>
        </div>
        </motion.div>
      );
    }
    else {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={tansition1}
          transition={{ duration: 1 }}
        >
          <div
            className="container infoCard py-3 px-3 card margin-bottom-36px"
            onClick={this.expand}
          >
            <div className=" py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                </div>
                <div className="col-lg-9">
                  <h2 className="mb-2">{this.props.title}</h2>
                  <h4 className="mb-3">{this.props.subtitle}</h4>
                  <p className="mb-3">{this.props.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
  }

  expand = () => {
    if(this.state.expanded === true){
      this.setState({
        expanded : false
      });
    }
    else{
      this.setState({
        expanded : true
      });
    }
    
  };
}

export default EduCard;
