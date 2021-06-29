import { DataHandler } from "../Services/clientDataHandler"
import React from "react";

class Budgeter extends React.Component {
  constructor() {
    super();
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
   
    if(this.state.adding){
      return(
        <div className="budgetControl container mt-5 py-5 px-5 card">
        <div className="row">
          <div className="col-12">
            <h2>Your budget</h2>
            <p>bla bla bla bla bla</p>
          </div>
        </div>
        <div className="row">
          <form>
            <label>Name</label> <input type="text" name="name" onChange={this.nameChange}></input><br></br>
            <label>value</label> <input type="number" name="value" onChange={this.valueChange}></input><br></br>
            <input type="submit" className="btn btn-success" onClick={this.completeAdd}></input>
          </form>
        </div>
      </div>
      )
    }
    
    else if(data != null){
      this.state.itemsArray = data;
      
        return (
          <div className="budgetControl container mt-5 py-5 px-5 card ">
            <div className="row">
              <div className="col-12">
                <h2>Your budget</h2>
                <p>bla bla bla bla bla</p>
              </div>
              <div className="col-12 titles">
                <div className="row">
                  <div className="col-xl-2 col-lg-2 col-md-3 col-6">name</div>
                  <div className="col-xl-10 col-lg-10 col-md-9 col-6">value</div>
                </div>
              </div>
              <div className="col-12 chart mb-4">
                    {this.state.itemsArray.map((item, index) => (
                      <div className="row" key={index}>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6 name"> {item.name} </div>
                        <div className="col-xl-10 col-lg-10 col-md-9 col-6 value">£{item.value > 0 ? item.value : item.value}</div>
                       </div>
                    ))}
              </div>
              <button className="btn btn-primary" onClick={this.openAddItem}>
                Add item
              </button>
            </div>
          </div>
        );
    }
    else{
      return (
        <div className="budgetControl container mt-5 py-5 px-5 card ">
          <div className="row">
            <div className="col-12">
              <h2>Your budget</h2>
              <p>bla bla bla bla bla</p>
            </div>
            <div className="col-12 titles">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-3 col-6">name</div>
                <div className="col-xl-10 col-lg-10 col-md-9 col-6">value</div>
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

  openAddItem =() => {
    this.setState({
      adding:true
    })
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  
  valueChange = (e) => {
    this.setState({ value: e.target.value });
  }

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


}
export default Budgeter;