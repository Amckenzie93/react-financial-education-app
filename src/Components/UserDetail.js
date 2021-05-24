import LineCharts from "../Components/LineCharts.js";
import React from "react";
import { motion } from "framer-motion";

class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      salary: null,
      savings: null,
      savingsRate: null,
      savingsFreq:null,
      savingsRateAmountPer: null,
      // edit: false,
    };
    this.onInputchange = this.onInputchange.bind(this);
    // this.closeEdit = this.closeEdit.bind(this);
    // this.openEdit = this.openEdit.bind(this);
  }

  onInputchange(event) {

    localStorage.setItem([event.target.name], event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
    debugger;
  }

  // closeEdit() {
  //   this.setState({
  //     edit : false
  //   });
  // }

  // openEdit() {
  //   this.setState({
  //       : true
  //   });
  // }

  render() {
    const tansition1 = {
      in: {
        opacity: 1,
        y:"0%"
      },
      out: {
        opacity: 0,
        y:"100%"
      },
    };


    const inputWarning = () => {
      if (this.state.savings.toString() == "" || this.state.savingsRate.toString() == "") {
        return <div>Please fill in more for dashboard to work</div>;
    }
  }


    try{
      this.state.salary = localStorage.getItem("salary");
      this.state.userName = localStorage.getItem("userName");
      this.state.savings = localStorage.getItem("savings");
      this.state.savingsRate = localStorage.getItem("savingsRate");
      this.state.savingsFreq = localStorage.getItem("savingsFreq");
      this.state.savingsRateAmountPer = localStorage.getItem("savingsRateAmountPer");
    }
    catch{
      
    }

    if (
      localStorage.getItem("salary") != null &&
      localStorage.getItem("userName") != null &&
      localStorage.getItem("savings") != null &&
      localStorage.getItem("savingsRate") != null &&
      localStorage.getItem("savingsFreq") != null &&
      localStorage.getItem("savingsRateAmountPer") != null)
      {    
      this.state.salary = localStorage.getItem("salary");
      this.state.userName = localStorage.getItem("userName");
      this.state.savings = localStorage.getItem("savings");
      this.state.savingsRate = localStorage.getItem("savingsRate");
      this.state.savingsFreq = localStorage.getItem("savingsFreq");
      this.state.savingsRateAmountPer = localStorage.getItem("savingsRateAmountPer");

      let oneYear = parseInt(this.state.savings) + (this.state.savingsRateAmountPer * 12);
      let oneYearInteres = oneYear/100*this.state.savingsRate;

        return(
          <div>
          <div className="userDetails isEdit container py-5 px-5 card">
            <div className="row">
              <div className="col-12 col-md">
                <h1 className="mb-2">Hello {this.state.userName},</h1>
                <h3 className="mb-4">Listed below is your financial budgeting break down</h3>
                {inputWarning()} 
                <ul>
                  <li className="mb-2">My Salary £ <input type="number" name="salary" onChange={this.onInputchange} value={this.state.salary} /> per year</li>
                  <li className="mb-2">My Savings £ <input type="number" name="savings" onChange={this.onInputchange} value={this.state.savings} /> in total</li>
                  <li className="mb-2">I put away £ <input type="number" name="savingsRateAmountPer" onChange={this.onInputchange} value={this.state.savingsRateAmountPer} /> per&nbsp; 
                    <select name="savingsFreq" id="savingsFreq" onChange={this.onInputchange} className="">
                      <option value="Weekly">Weekly</option>
                      <option value="Biweekly">Biweekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Bimonthly">Bimonthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Annually">Annually</option>
                      <option value="none">I dont</option>
                    </select>
                  </li>
                  <li className="mb-2">Interest rate <input type="number" name="savingsRate" onChange={this.onInputchange} value={this.state.savingsRate}/> %</li>
                </ul>
                <br></br>
                <button onClick={this.closeEdit}>Calculate</button> 	&nbsp;- Stock market predicitons can change

              </div>
            </div>
          </div>
          <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={tansition1}
          transition={{ duration: 0.82 }}>
          <LineCharts/>
          </motion.div>
          </div>
        )
    } 
    else {
      return (
        <div className="userDetails container py-5 px-5 card">
          <h2>Financial Details</h2>
          <p>Please take time to fill out the form below as accuratly as possible to allow for an optimal tailored experience to your situation.</p>
           <div className="alert alert-warning" role="alert">
           <p className="mb-0">All personal data will only be stored on your device - we will not see or save any of your data.</p></div>
          <div className="row">
            <form className="col-12 col-md" onSubmit={this.handleSubmit}>
              
              <div className="form-group">
                <label className="form-text "htmlFor="username">Name </label>
                <input className="form-control" required id="username" name="username" value={this.state.userName} onChange={this.onInputchange}  type="text" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="salary">Salary </label>
                <input className="form-control" required id="salary" name="salary" type="number" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savings">Savings </label>
                <input className="form-control" required id="savings" name="savings" type="number" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savingsRate">Savings rate (%) </label>
                <input className="form-control" required id="savingsRate" name="savingsRate" />
              </div>

              <div className="form-group">
                <label htmlFor ="savingsFreq" className="form-text">How often do you add to your savings? </label>
                <select name="savingsFreq" id="savingsFreq" required className="form-control">
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
                <label className="form-text" htmlFor ="savingsRateAmountPer">At what amount roughly?</label>
                <input className="form-control" required id="savingsRateAmountPer" name="savingsRateAmountPer" />
              </div>

              <button className="btn btn-primary" type="submit">Save</button>
            </form>
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
}

export default UserDetail;
