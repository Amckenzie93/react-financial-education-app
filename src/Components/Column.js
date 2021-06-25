import { NavLink } from "react-router-dom";
import React from "react";
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class Column extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let transition = Transitions.getInstance();
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: this.props.transitionTime }}
          className="col-lg-6 margin-bottom-64px padding-24px"
        >
          <div className="card bg-white bg-shadow-up padding-64px">
            <h2 className="mb-4">{this.props.title}</h2>

            {/* If image prop passed in show the image, else dont render the image element */}
            {this.props.image != "" ? (
              <img className="mb-4 max-height-140px" src={this.props.image} />
            ) : null}
            <p className="mb-4">{this.props.paragraph}</p>

            {/* If linkUrl prop passed in show the link, else dont render the link element */}
            {this.props.linkUrl != "" ? (
              <p>
                <NavLink
                  className="btn btn-primary mt-2"
                  to={this.props.linkUrl}
                  role="button"
                >{this.props.linkText}</NavLink>
              </p>
            ) : null}
          </div>
        </motion.div>
      );
    }
}
export default Column;