import React from "react";

class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      salary: null,
      savings: null,
      savingsRate: null
    };
  }

  render() {
    if (
      localStorage.getItem("Salary") != null &&
      localStorage.getItem("userName") != null &&
      localStorage.getItem("savings") != null &&
      localStorage.getItem("savingsRate") != null
    ) {
      this.state.salary = localStorage.getItem("Salary");
      this.state.userName = localStorage.getItem("userName");
      this.state.savings = localStorage.getItem("savings");
      this.state.savingsRate = localStorage.getItem("savingsRate");
      return (
        <div className="container py-5 px-5 my-5 card">
          <div className="row">
            <div className="col-12 col-md">
              <h2>Hello {this.state.userName}, welcome back</h2>
              <h3>Your salary is £{this.state.salary}</h3>
              <h3>Your savings are £{this.state.savings} at the rate of {this.state.savingsRate}% per year</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container py-5 px-5 my-5 card">
          <h2>Financial Details</h2>
          <p>Please take time to fill out the form below as accuratly as possible to allow for an optimal tailored experience to your situation.</p>
           <div className="alert alert-warning" role="alert">
           <p className="mb-0">All of your personal data will be stored on your device, we will not see or save any of your data.</p></div>
          <div className="row">
            <form className="col-12 col-md" onSubmit={this.handleSubmit}>
              
              <div className="form-group">
                <label className="form-text "htmlFor="username">Name </label>
                <input className="form-control" id="username" name="username" type="text" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="salary">Salary </label>
                <input className="form-control" id="salary" name="salary" type="number" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savings">Savings </label>
                <input className="form-control" id="savings" name="savings" type="number" />
              </div>

              <div className="form-group">
                <label className="form-text" htmlFor="savingsRate">Savings rate (%) </label>
                <input className="form-control" id="savingsRate" name="savingsRate" />
              </div>

              <div className="form-group">
                <label for="savingsFreq" className="form-text">How often do you add to your savings? </label>
                <select name="cars" id="cars" className="form-control">
                  <option value="1">Weekly</option>
                  <option value="2">Biweekly</option>
                  <option value="3">Monthly</option>
                  <option value="4">Bimonthly</option>
                  <option value="5">Quarterly</option>
                  <option value="6">Annually</option>
                  <option value="7">I dont</option>
                </select>
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
    debugger;
    this.setState({
      userName: data.get("username"),
      salary: data.get("salary"),
      savings: data.get("savings"),
      savings: data.get("savingsRate")
    });
    localStorage.setItem("userName", data.get("username"));
    localStorage.setItem("Salary", data.get("salary"));
    localStorage.setItem("savings", data.get("savings"));
    localStorage.setItem("savingsRate", data.get("savingsRate"));
  };
}

export default UserDetail;
