import { DataHandler } from "../Services/clientDataHandler"
import React from "react";

class Budgeter extends React.Component {
  constructor() {
    super();
    // setting the react component state with the following properties for use
    this.state = {
      adding: false,
      itemsArray: [],
      name:"",
      value:0,
    };
  }

  render() {

    let dataHandlerService = DataHandler.getInstance();
    let data = dataHandlerService.getBudgetArray();
   
    // return this view if the user is adding a budget item to the list
    if(this.state.adding){
      return(
        <div className="budgetControl container mt-5 py-5 px-5 card">
        <div className="row">
          <div className="col-12">
            <h2>Your budget</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="row">
          <form className="col-12">
            <label>Name</label> <input type="text" name="name" onChange={this.nameChange} className="margin-bottom-12px"></input><br></br>
            <label>value&nbsp;</label> <input type="number" name="value" onChange={this.valueChange}></input><br></br>
            <input type="submit" className="btn btn-success margin-top-24px margin-right-24px" onClick={this.completeAdd}></input>
            <input type="button" className="btn btn-danger margin-top-24px" onClick={this.cancelAdd} value="Cancel"></input>
          </form>
        </div>
      </div>
      )
    }

    //else return the budget collection if it has data
    else if(data != null){
      this.state.itemsArray = data;
        return (
          <div className="budgetControl container mt-5 py-5 px-5 card ">
            <div className="row">
              <div className="col-12">
                <h2>Your budget</h2>
                <p className="mb-1">Feel free to list your monthly, weekly, or yearly budget onto the web app.</p>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 titles">
                <div className="row">
                  <div className="col-xl-2 col-lg-2 col-md-3 col-6">Item name</div>
                  <div className="col-xl-10 col-lg-10 col-md-9 col-6">Item value</div>
                </div>
              </div>
              <div className="col-12 chart">
                {/* Map function listing each of the budget items the user has entered split 
                by a ternary statement based on whether the figure is positive or negative.  */}
                    {this.state.itemsArray.map((item, index) => (
                      <div>
                        {this.isPositive(item.value)? (
                          <div className="row positive" key={index}>
                          <div className="col-xl-2 col-lg-2 col-md-3 col-6 name">{item.name}</div>
                          <div className="col-xl-10 col-lg-10 col-md-9 col-6 value">{item.value}</div>
                          </div>
                        ) 
                      : (
                        <div className="row negative" key={index}>
                          <div className="col-xl-2 col-lg-2 col-md-3 col-6 name">{item.name}</div>
                          <div className="col-xl-10 col-lg-10 col-md-9 col-6 value">{item.value}</div>
                        </div>
                        )}
                      </div>  
                    ))}
              </div>
              <div className="col-12 mb-4 totals">
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-3 col-6 name"> Total (£) </div>
                      {/* check total value and append appropriate class name to display negative or positive*/}
                      {this.isPositive(this.calcTotal(this.state.itemsArray))? (
                        <div className="col-xl-10 col-lg-10 col-md-9 col-6 value positive">{this.calcTotal(this.state.itemsArray)}</div>
                      )
                      :
                      (
                          <div className="col-xl-10 col-lg-10 col-md-9 col-6 value negative">{this.calcTotal(this.state.itemsArray)}</div>
                      )}
                      </div>
              </div>
              <button className="btn btn-primary" onClick={this.openAddItem}>
                Add item
              </button>
            </div>
          </div>
        );
    }
    //otherwise show an empty budgeting list
    else{
      return (
        <div className="budgetControl container mt-5 py-5 px-5 card ">
          <div className="row">
            <div className="col-12">
              <h2>Your budget</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-12 titles">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-3 col-6">Item name</div>
                <div className="col-xl-10 col-lg-10 col-md-9 col-6">Item value</div>
              </div>
            </div>
            <div className="col-12 chart mb-4">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-3 col-6 name">
                  &nbsp;
                </div>
                <div className="col-xl-10 col-lg-10 col-md-9 col-6 value">
                  &nbsp;
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.openAddItem}>
              Add item
            </button>
          </div>
        </div>
      );
    }
  }

  // arrow function setting the components state of 'adding' to true which drives the view render
  openAddItem =() => {
    this.setState({
      adding:true
    })
  }

  // arrow function to cancel setting any budget items, setting state of 'adding' to false
  cancelAdd = () => {
    this.setState({
      adding:false
    })
  }

  // completes adding a budget item, and stores it back to the data client for perminant storage.
  completeAdd = () => {
    let dataHandlerService = DataHandler.getInstance();
    let item = {
      "name": this.state.name,
      "value": this.state.value
    };
    let currentItems = this.state.itemsArray.slice();
    currentItems.push(item);
    
    dataHandlerService.setBudgetArray(currentItems);
    this.setState({
      adding:false,
      itemsArray: currentItems
    })
  }

  isPositive = (value) =>{
    if(value >0){
      return true;
    }
    else{
      return false;
    }
  }

  
  // function to calculate the total from the budget 
  calcTotal = (array) => {
    let total = 0;
    array.forEach((item) => {
      total = total + parseInt(item.value);
    });

    return total;
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  
  valueChange = (e) => {
    this.setState({ value: e.target.value });
  }

}
export default Budgeter;