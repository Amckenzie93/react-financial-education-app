import { DataHandler } from "../Services/clientDataHandler"
import { NavLink } from "react-router-dom";
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

    if(this.state.userName != null){
      dataHandlerService.setUsername(this.state.userName)
    }

    if (dataHandlerService.validName() && this.state.entered != true){
      return (
        <div className="hero text-white padding-top-84px px-4 mb-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <img
                    className="width100 mobile"
                    src="./Assets/Images/homeMain.svg"
                  />
                  <h1>{"Hi " + dataHandlerService.getUsername()}</h1>
                  <h3>Good to see you back</h3>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100 desktop"
                  src="./Assets/Images/homeMain.svg"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.expanded === true && this.state.entered != true) {
      return (
        <div className="hero text-white padding-top-84px mb-5">
          <div className="container pt-5 px-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <img
                    className="width100 mobile"
                    src="./Assets/Images/homeMain.svg"
                  />
                  <h1 className="mb-3">Conquer Finance</h1>
                  <form
                    className="mr-5 pr-3"
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                  >
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

                      <button className="btn btn-primary" type="submit" tabindex="0">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100 desktop"
                  src="./Assets/Images/homeMain.svg"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.expanded === true && this.state.entered === true){
      return (
        <div className="hero text-white padding-top-84px mb-5">
          <div className="container pt-5 px-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <img
                    className="width100 mobile"
                    src="./Assets/Images/homeMain.svg"
                  />
                  <h1 className="mb-3">Conquer Finance</h1>
                  <form className="mr-5 pr-3" onSubmit={this.handleSubmit}>
                    <p>Thank you {this.state.userName}, lets begin!</p>
                    <NavLink
                      className="btn btn-primary mt-2"
                      to="/education"
                      role="button"
                      tabindex="0"
                    >
                      Begin
                    </NavLink>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100 desktop"
                  src="./Assets/Images/homeMain.svg"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="hero text-white padding-top-84px mb-5">
          <div className="container pt-5 px-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="v-align">
                  <img
                    className="width100 mobile"
                    src="./Assets/Images/homeMain.svg"
                  />
                  <h1 className="mb-3">Conquer Finance</h1>
                  <p className="mb-4">
                    Use our free education services and budgeting tools to
                    better yourself financially for the future
                  </p>
                  <a
                    className="btn btn-primary mt-2"
                    role="button"
                    onClick={this.expand}
                    tabindex="0"
                  >
                    Start your Journey
                  </a>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <img
                  className="width100 desktop"
                  src="./Assets/Images/homeMain.svg"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }


  
  trysetState = () => {
    if(localStorage.getItem("userName") != null){
      let dataHandlerService = DataHandler.getInstance();
      dataHandlerService.setUsername(this.state.userName);
      this.setState({
        userName : localStorage.getItem("userName")
      });
    }
  };


  handleSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    localStorage.setItem("userName", form.get("username"));
    this.setState({
      userName: form.get("username"),
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
