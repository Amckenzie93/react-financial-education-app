import { Link, NavLink } from "react-router-dom";

import React from "react";
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class EduCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      understand: false,
    };
  }

  render() {

    let transition = Transitions.getInstance();
    
    if (this.state.understand === true && this.state.expanded === false) {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.85 }}
        >
          <div
            className="container infoCard closed py-3 px-3 card margin-bottom-36px"
            onClick={this.expand}
          >
            <div className="py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                  <br></br>
                  <img
                    className="width100 py-1 px-4 v-align tick"
                    src="./Assets/Images/tick.png"
                    alt={this.props.alt}
                  />
                </div>
                <div className="col-lg-9">
                  <h4 className="mb-2">{this.props.title} - Complete</h4>
                  <h2 className="mb-3">{this.props.subtitle}</h2>
                  <p className="mb-3">{this.props.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else if (this.state.understand === false && this.state.expanded === true) {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.82 }}
        >
          <div
            className="container infoCard py-3 px-3 card margin-bottom-36px"
            onClick={this.expand}
          >
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
                  <h4 className="mb-2">{this.props.title}</h4>
                  <h2 className="mb-3">{this.props.subtitle}</h2>
                  <p className="mb-3">{this.props.paragraph}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <hr className="margin-bottom-28px" />
                  <h4>{this.props.lessonTitle}</h4>
                  <p>{this.props.lessonText}</p>
                  {this.renderList(this.props.lessonPoints)}
                  <button
                    className="btn btn-primary mt-2"
                    onClick={this.understand}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else {
      if (this.state.understand === true) {
        return (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 0.82 }}
          >
            <div
              className="container infoCard py-3 px-3 card margin-bottom-36px"
              onClick={this.expand}
            >
              <div className="py-4 px-2 bg-white border-radius-5">
                <div className="row">
                  <div className="col-lg-3">
                    <img
                      className="width100 py-1 px-4 v-align"
                      src={this.props.imageUrl}
                      alt={this.props.alt}
                    />
                    <br></br>
                    <img
                      className="width100 py-1 px-4 v-align tick"
                      src="./Assets/Images/tick.png"
                      alt={this.props.alt}
                    />
                  </div>
                  <div className="col-lg-9">
                    <h4 className="mb-2">{this.props.title} - Complete</h4>
                    <h2 className="mb-3">{this.props.subtitle}</h2>
                    <p className="mb-3">{this.props.paragraph}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9">
                    <hr className="margin-bottom-28px" />
                    <h4>{this.props.lessonTitle}</h4>
                    <p>{this.props.lessonText}</p>
                    <ul className="ml-0 pl-4">
                      <li>some topic point</li>
                      <li>some topic point</li>
                      <li>some topic point</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      } else {
        return (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 1 }}
          >
            <div
              className="container infoCard closed py-3 px-3 card margin-bottom-36px"
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
                    <h4 className="mb-2">{this.props.title}</h4>
                    <h2 className="mb-3">{this.props.subtitle}</h2>
                    <p className="mb-3">{this.props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      }
    }
  }

  renderList = (Array) => {
    if(Array != undefined){
      return(
        <ul>
          {Array.map(function(data, index) {
            return <li key={index}>{data}</li>;
          })}
        </ul>
      )
    }
  }

  understand = () => {
    this.setState({
      understand: true,
    });
  };

  expand = () => {
    if (this.state.expanded === true) {
      this.setState({
        expanded: false,
      });
    } else {
      this.setState({
        expanded: true,
      });
    }
  };
}

export default EduCard;
