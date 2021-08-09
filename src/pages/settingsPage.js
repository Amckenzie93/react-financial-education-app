import Banner from "../Components/Banner";
import { DataHandler } from "../Services/clientDataHandler"
import { NavLink } from "react-router-dom";
import React from "react";
import Transitions from "../utility/transitions"
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
  return (
    <React.Fragment>
      <div className="text-black min-height-100vh">
        <div className="padding-verticle-84px">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 0.62 }}
          >
            <Banner
              title={"Your Settings"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mauris sed leo suscipit pretium. Mauris nec nulla tortor. Integer eget cursus justo"
              }
              image={"/Assets/Images/settings.svg"}
              dataNotice={true}
            />
          </motion.div>
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 0.9 }}
            className="container px-4"
          >
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
  );
} else {
  return (

    //Animate the page into view on render 
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={transition.getTransition()}
    transition={{ duration: 0.62 }}
  >
      <div className="text-black min-height-100vh">
        <div className="padding-verticle-84px">
        <Banner
        title={"Your Settings"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mauris sed leo suscipit pretium. Mauris nec nulla tortor. Integer eget cursus justo"}
        image={"/Assets/Images/settings.svg"}/>
          <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.9 }}
          className="container">
            <div className="bg-white bg-shadow-up pt-1 margin-top-80px">
              <div className="container py-5 px-4 mt-5">
                <div className="row text-center">
                  <div className="col-lg-12">
                    <h2 className="mb-5">You have no data</h2>
                    {this.renderData(data)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  </motion.div>

  );
}
}

  deleteData = (event) =>{
    let dataHandlerService = DataHandler.getInstance()
    dataHandlerService.deleteData();
  }

  // function to process JSON data and render back into the view
  renderData = (data) => {
    let collection = [];
    let jsonCollection = [];

    for (const key in data) {
      // to render the json collection for these arrays 
      // they need to be captured outside of the data for processing
      // could be implemented better in future*
      if(key != "lessonData" && key != "budgetArray"){
        //push data to array for rendering in the return section below
        collection.push(`${key}: ${data[key]}`)
      }
      else{
        jsonCollection.push((`${key}: ${data[key]}`))
      }
    }

    //return all the data in html format using both collections
    return (
      <div>
          {collection.map(function(item, index){
              return <pre key={ index }>{item}</pre>;
          })}
          {/* Json arrays need formatting - to be done */}
          {jsonCollection.map(function(item, index){
              return <pre key={ index }>{item}</pre>;
          })}
      </div>
    )
  }
  
  
}

export default SettingsPage;
