import { DataHandler } from "../Services/clientDataHandler"
import { NavLink } from "react-router-dom";
import React from "react";
import Transitions from "../utility/transitions"
import { browserHistory } from 'react-router'
import { motion } from "framer-motion";

class SettingsPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {

    let dataHandlerService = DataHandler.getInstance()
    let data = dataHandlerService.getAllData();
    let transition = Transitions.getInstance();
    
if (dataHandlerService.hasAnyData()) {
  return(
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={transition.getTransition()}
    transition={{ duration: 0.62 }}
  >
    <React.Fragment>
      <div className="text-black min-height-100vh">
        <div className="padding-verticle-84px">
          <div className="container pt-4 text-white margin-bottom-64px">
            <div className="row">
              <div className="col-lg-6">
                <div className="v-align">
                  <h1 className="mb-2">Your Settings</h1>
                  <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Vivamus sit amet mauris sed leo suscipit pretium. 
                  Mauris nec nulla tortor. Integer eget cursus justo
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  className="width100 mb-5 v-align"
                  src="./Assets/Images/settings.svg"
                />
              </div>
            </div>
          </div>

          <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.9 }}
          className="container">
            <div className="bg-white bg-shadow-up pt-1 margin-top-80px">
              <div className="container py-5 px-5 mt-5">
                <div className="row text-center">
                  <div className="col-lg-12">
                    <h2 className="">Your Data</h2>
                    {this.renderData(data)}
                    <h3 className="mb-3 margin-top-64px">Delete your data</h3>
                    <p className="mb-4">
                      Confirm below to delete all your data from your device
                    </p>
                    <form onSubmit={this.deleteData}>
                      <button
                        type="submit"
                        className="btn btn-danger mt-2"
                        role="submit"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  </motion.div>
  );
} else {
  return (

    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={transition.getTransition()}
    transition={{ duration: 0.62 }}
  >
    <React.Fragment>
      <div className="text-black min-height-100vh">
        <div className="padding-verticle-84px">
          <div className="container pt-4 text-white margin-bottom-64px">
            <div className="row">
              <div className="col-lg-6">
                <div className="v-align">
                  <h1 className="mb-2">Your Settings</h1>
                  <p className="mb-0">
                    Please use the dashboard offered to enter your financial
                    information so that you can tweak it and adjust so that you
                    can see a rough estimation of the impact it has had over 50
                    years.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  className="width100 mb-5 v-align"
                  src="./Assets/Images/settings.svg"
                />
              </div>
            </div>
          </div>

          <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.9 }}
          className="container">
            <div className="bg-white bg-shadow-up pt-1 margin-top-80px">
              <div className="container py-5 px-5 mt-5">
                <div className="row text-center">
                  <div className="col-lg-12">
                    <h2 className="mb-5">You have no data</h2>
                    {this.renderData(data)}
                    <img
                      className="margin-top-42px"
                      style={{ maxWidth: "200px" }}
                      src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/no-data.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  </motion.div>

  );
}
}

  deleteData = (event) =>{
    let dataHandlerService = DataHandler.getInstance()
    dataHandlerService.deleteData();
  }

  renderData = (data) => {
    let collection = [];
    for (const key in data) {
      collection.push(`${key}: ${data[key]}`)
    }
    return (
      <div>
          {collection.map(function(item, index){
              return <div key={ index }>{item}</div>;
            })}
      </div>
    )
  }
  
  
}

export default SettingsPage;
