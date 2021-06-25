import { DataHandler } from "../Services/clientDataHandler"
import LineCharts from "../Components/LineCharts.js";
import React from "react";
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      salary: "",
      savings: "",
      savingsRate: "",
      savingsFreq:"",
      savingsRateAmountPer: "",
      edit: false,
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.openEdit = this.openEdit.bind(this);
  }

  render() {

    let dataHandlerService = DataHandler.getInstance();
    const data = dataHandlerService.getAllData();
    let transition = Transitions.getInstance();

    // if the user already has valid data 
    if (dataHandlerService.validateSavings()) {
      //if the user is currently editing their data render this version of HTML 
      if(this.state.edit == true) {
        this.trysetState();
        return (
          <div>
            <div className="userDetails isEdit container py-5 px-5 card">
              <div className="row">
                <div className="col-12 col-md">
                  <h2>Your information</h2>
                  <br></br>
                  <h3 className="mb-2">A note on your financial data</h3>
                  <p className="mb-4">
                    As financial data is personal and private to each and every
                    one of us, we've ensure that only you and your device alone
                    can store and/or process the information you input anywhere
                    on this website.
                  </p>
                  <ul>
                    <li className="mb-2">
                      My Salary £{" "}
                      <input
                        type="number"
                        name="salary"
                        onChange={this.onInputchange}
                        value={this.state.salary}
                      />{" "}
                      per year
                    </li>
                    <li className="mb-2">
                      My Savings £{" "}
                      <input
                        type="number"
                        name="savings"
                        onChange={this.onInputchange}
                        value={this.state.savings}
                      />{" "}
                      in total
                    </li>
                    <li className="mb-2">
                      I put away £{" "}
                      <input
                        type="number"
                        name="savingsRateAmountPer"
                        onChange={this.onInputchange}
                        value={this.state.savingsRateAmountPer}
                      />{" "}
                      per&nbsp;
                      <select
                        name="savingsFreq"
                        id="savingsFreq"
                        onChange={this.onInputchange}
                        className=""
                      >
                        <option value="Weekly">Weekly</option>
                        <option value="Biweekly">Biweekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Bimonthly">Bimonthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Annually">Annually</option>
                        <option value="none">I dont</option>
                      </select>
                    </li>
                    <li className="mb-2">
                      Interest rate{" "}
                      <input
                        type="number"
                        name="savingsRate"
                        onChange={this.onInputchange}
                        value={this.state.savingsRate}
                      />{" "}
                      %
                    </li>
                    <br></br>
                    <button onClick={this.closeEdit}>Save</button>
                  </ul>
                </div>
              </div>
            </div>
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={transition.getTransition()}
              transition={{ duration: 0.9 }}
            >
              <LineCharts />
            </motion.div>
          </div>
        );
      } // else render the users data in the un-editing version of HTML
      else{
        this.trysetState();
         return (
           <div>
             <div className="userDetails container py-5 px-5 card">
               <div className="row">
                 <div className="col-12 col-md">
                   <h2>Your information</h2>
                   <br></br>
                   <h3 className="mb-2">A note on your financial data</h3>
                   <p className="mb-4">
                     As financial data is personal and private to each and every
                     one of us, we've ensure that only you and your device alone
                     can store and/or process the information you input anywhere
                     on this website.
                   </p>

                   <ul>
                     <li className="mb-2">
                       My Salary £{this.state.salary} per year
                     </li>
                     <li className="mb-2">
                       My savings £{this.state.savings} in total
                     </li>
                     <li className="mb-2">
                       I put away £{this.state.savingsRateAmountPer} per{" "}
                       {this.state.savingsFreq}
                     </li>
                     <li className="mb-2">
                       My interest rate {this.state.savingsRate}%
                     </li>
                   </ul>
                   <br></br>
                   <button onClick={this.openEdit}>Edit</button>
                 </div>
               </div>
             </div>
             <motion.div
               initial="out"
               animate="in"
               exit="out"
               variants={transition.getTransition()}
               transition={{ duration: 0.82 }}
             >
               <LineCharts />
             </motion.div>
           </div>
         );
      }
    }
    //Else if no data, present the input form HTML
    else {
      return (
        <div className="userDetails container py-5 px-5 card">
          <h2>Financial Details</h2>
          <p>
            Please take time to fill out the form below as accuratly as possible
            to allow for an optimal tailored experience to your situation.
          </p>
          <div className="alert alert-warning" role="alert">
            <p className="mb-0">
              All personal data will only be stored on your device - we will not
              see or save any of your data, it will never leave your device.
            </p>
          </div>
          <div className="row">
            <form className="col-12 col-md" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-text " htmlFor="username">
                  Name{" "}
                </label>
                <input
                  className="form-control"
                  required
                  id="username"
                  name="username"
                  value={data.userName}
                  type="text"
                />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="salary">
                  Salary{" "}
                </label>
                <input
                  className="form-control"
                  required
                  id="salary"
                  name="salary"
                  type="number"
                />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savings">
                  Savings{" "}
                </label>
                <input
                  className="form-control"
                  required
                  id="savings"
                  name="savings"
                  type="number"
                />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savingsRate">
                  Savings rate (%){" "}
                </label>
                <input
                  className="form-control"
                  required
                  id="savingsRate"
                  name="savingsRate"
                  type="number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="savingsFreq" className="form-text">
                  How often do you add to your savings?{" "}
                </label>
                <select
                  name="savingsFreq"
                  id="savingsFreq"
                  required
                  className="form-control"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Bimonthly">Bimonthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Annually">Annually</option>
                  <option value="none">I dont</option>
                </select>
              </div>

              <div className="form-group mb-5">
                <label className="form-text" htmlFor="savingsRateAmountPer">
                  At what amount roughly?
                </label>
                <input
                  className="form-control"
                  required
                  id="savingsRateAmountPer"
                  name="savingsRateAmountPer"
                  type="number"
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      );
    }
  }

  // when the user makes a change to their data on the application, update the react components state and store/update the persistant data on the users device.
  onInputchange(event) {
    localStorage.setItem([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // change the state of the react component so the editing version of HTML is rendered.
  openEdit() {
    this.setState({
      edit: true
    });
  }

  // change the state of the react component so the version of HTML rendered is no longer the editing version.
  closeEdit() {
    this.setState({
      edit: false
    });
  }


  // When the user submits their data, capture it and set the components state along with storing it on the users device. 
  handleSubmit = (event) => {
    const data = new FormData(event.target);
    this.setState({
      userName: data.get("username"),
      salary: data.get("salary"),
      savings: data.get("savings"),
      savings: data.get("savingsRate"),
      savingsFreq: data.get("savingsFreq"),
      savingsRateAmountPer: data.get("savingsRateAmountPer"),
    });
    localStorage.setItem("userName", data.get("username"));
    localStorage.setItem("salary", data.get("salary"));
    localStorage.setItem("savings", data.get("savings"));
    localStorage.setItem("savingsRate", data.get("savingsRate"));
    localStorage.setItem("savingsFreq", data.get("savingsFreq"));
    localStorage.setItem("savingsRateAmountPer", data.get("savingsRateAmountPer"));
  };

  // get and set the state of the component based on any previously saved data.
  trysetState = () => {
      this.state.salary = localStorage.getItem("salary");
      this.state.userName = localStorage.getItem("userName");
      this.state.savings = localStorage.getItem("savings");
      this.state.savingsRate = localStorage.getItem("savingsRate");
      this.state.savingsFreq = localStorage.getItem("savingsFreq");
      this.state.savingsRateAmountPer = localStorage.getItem("savingsRateAmountPer");
      let dataHandlerService = DataHandler.getInstance();
      dataHandlerService.setUsername(this.state.userName);
      dataHandlerService.setSalary(this.state.salary);
      dataHandlerService.setSavings(this.state.savings);
      dataHandlerService.setSavingsRate(this.state.savingsRate);
      dataHandlerService.setSavingsFreq(this.state.savingsFreq);
      dataHandlerService.setSavingsRateAmountPer(this.state.savingsRateAmountPer);
  };

}

export default UserDetail;
