import { Link, NavLink } from "react-router-dom";

import { DataHandler } from "../Services/clientDataHandler"
import React from "react";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      expanded: false,
      entered: false
  };
  }

  render() {

    let dataHandlerService = DataHandler.getInstance();
    const data = dataHandlerService.getAllData();

    if (dataHandlerService.validName()){
      return (
        <div className="hero text-white pt-5 mb-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <h1>{"Hi " + dataHandlerService.getUsername()}</h1>
                  <h3>Good to see you back</h3>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100"
                  src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.expanded === true && this.state.entered != true) {
      return (
        <div className="hero text-white pt-5 mb-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <h1 className="mb-3">Conquer Finance</h1>
                  <form className="mr-5 pr-3" onSubmit={this.handleSubmit} autoComplete="off">
                  <p>lets start with your name</p>
                    <div className="form-group">
                      <input
                        className="form-control mb-4"
                        id="username"
                        name="username"
                        type="text"
                        required
                        placeholder="Gandalf the grey"
                      />
                      
                      <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100"
                  src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.expanded === true && this.state.entered === true){
      return (
        <div className="hero text-white pt-5 mb-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <h1 className="mb-3">Conquer Finance</h1>
                  <form className="mr-5 pr-3" onSubmit={this.handleSubmit}>
                  <p>Thank you {this.state.userName}, lets begin!</p>
                  <NavLink
                    className="btn btn-primary mt-2"
                    to="/education"
                    role="button"
                  >
                    Begin »
                  </NavLink>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100"
                  src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="hero text-white pt-5 mb-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="v-align">
                <h1 className="mb-3">Conquer Finance</h1>
                <p className="mb-4">
                  Use our free education services and budgeting tools to
                  better yourself financially for the future
                </p>
                <a
                  className="btn btn-primary mt-2"
                  role="button"
                  onClick={this.expand}
                >
                  Start your Journey
                </a>
              </div>
            </div>
            <div className="col-lg-8 text-center">
              <img
                className="width100"
                src="./Assets/Images/—Pngtree—network bitcoin technology blockchain big_4034259.png"
              />
            </div>
          </div>
        </div>
      </div>
      );
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({
      userName: data.get("username"),
    });
    localStorage.setItem("userName", data.get("username"));
    this.setState({
      entered : true
    });
  };

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

export default Hero;
