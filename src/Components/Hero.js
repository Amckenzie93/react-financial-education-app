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

    // if the user is a returning user and has a name - display this render
    if (dataHandlerService.validName() && this.state.entered != true){
      return (
        <div className="hero text-white padding-top-84px px-4">
          <div className="container pt-5 px-2">
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

    // if the user has visited before, but has clicked next on the first tab, render this view
    if (this.state.expanded === true && this.state.entered != true) {
      return (
        <div className="hero text-white padding-top-84px px-2">
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
                    <p>lets start with a name</p>
                    <div className="form-group">
                      <input
                        className="form-control mb-4"
                        id="username"
                        name="username"
                        type="text"
                        required
                        placeholder="Rupert the thoughtful"
                      />
                      <button className="btn btn-primary margin-bottom-18px" type="submit" tabIndex="0">
                        Save
                      </button>
                      <p className="font-size-14px">To continue without a name, <NavLink
                      className="font-bold white font-underline"
                      to="/education"
                      role="button"
                      tabIndex="0">click here</NavLink>.</p>
                       <p className="margin-bottom-4px">Please note: </p>
                       <p className="font-size-14px">All information entered in this application will never leave your device. Its stored with you and only you have access to it. You can delete your data from the settings page at any time. </p>                      
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
    //other wise if the user hasnt visited before but has clicked the first button and entered their name render this view
    else if(this.state.expanded === true && this.state.entered === true){
      return (
        <div className="hero text-white padding-top-84px px-2">
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
                      tabIndex="0"
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
    // otherwise if the user is visiting for the first time with zero data, show this view
    else {
      return (
        <div className="hero text-white padding-top-84px px-2">
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
                    tabIndex="0"
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


  //function to set the state of the users name if it has been submitted before.
  trysetState = () => {
    if(localStorage.getItem("userName") != null){
      let dataHandlerService = DataHandler.getInstance();
      dataHandlerService.setUsername(this.state.userName);
      this.setState({
        userName : localStorage.getItem("userName")
      });
    }
  };

// function to handle the submit of the users name on entry
  handleSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    localStorage.setItem("userName", form.get("username"));
    this.setState({
      userName: form.get("username"),
      entered : true
    });
  };

  //function to handle the progression of steps for this component.
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
