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
    let data = dataHandlerService.getAllData();
    debugger;
    if(dataHandlerService.hasAnyData()){
    return (
      <div>
        <div className="bg-purple-grad" style={{ height: "1px" }}></div>
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
                  <h2 className="mb-5">You have no data</h2>
                  {this.renderData(data)}
                  <img className="margin-top-42px" style={{"maxWidth":"200px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/no-data.png"></img>
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
