import { DataHandler } from "../Services/clientDataHandler"
import { NavLink } from "react-router-dom";
import React from "react";
import Transitions from "../utility/transitions"
import { browserHistory } from 'react-router'

class SettingsPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {

    let dataHandlerService = DataHandler.getInstance()
    if(dataHandlerService.hasAnyData()){
    return (
      <div>
        <div className="bg-purple-grad" style={{"height":"1px"}}></div>
        <div className="bg-white bg-shadow-up pt-1 margin-top-80px">
          <div className="container py-5 px-5 mt-5">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2 className="mb-4">Delete your data</h2>
                <img
                  className="mb-4 max-width-170px"
                  src="./Assets/Images/book.svg"
                />
                <p className="mb-4">
                  Confirm below to delete all your data from your device
                </p>
                
                  <form onSubmit={this.deleteData}>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    role="submit"
                  >
                    Delete
                  </button>
                  </form>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    );
    }
    else {
      return (
        <div>
          <div className="bg-purple-grad" style={{"height":"1px"}}></div>
          <div className="bg-white bg-shadow-up pt-1 margin-top-80px">
            <div className="container py-5 px-5 mt-5">
              <div className="row text-center">
                <div className="col-lg-12">
                  <h2 className="mb-4">You have no data</h2>
                  <img style={{"max-width":"200px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/no-data.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  deleteData = (event) =>{
    let dataHandlerService = DataHandler.getInstance()
    dataHandlerService.deleteData();
  }

}

export default SettingsPage;
