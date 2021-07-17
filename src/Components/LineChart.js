import Chart from "react-google-charts";
import { DataHandler } from "../Services/clientDataHandler"
import React from "react";

class LineChart extends React.Component {

  constructor() {
    super();
    this.state = {
      userName: null,
      salary: null,
      savings: null,
      savingsRate: null,
      savingsFreq:null,
      savingsRateAmountPer: null,
    };
  }

  render() {
    let dataHandlerService = DataHandler.getInstance();

    if (dataHandlerService.validateSavings()){    
      this.setState();

      return (
        <div className="container py-5 px-5 mt-5 card margin-bottom-36px">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
            <h2>{this.props.title}</h2>
            <br></br>
            <p>{this.props.paragraph}</p>
            <br></br>
            <h4 className="margin-bottom-24px">Scenario details</h4>
            <ul className="ml-0 padding-left-30px">
                    {/* render any lesson point properties passed in as list items available */}
                    {this.props.listItems.map((item, index) => <li className="mb-2" key={index}>{item}</li>)}
            </ul>
            <br></br>
            <Chart
            width="100%"
            height={'450px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={this.generateChartData(51,this.props.chartType)}
              options={{
                legend: { position: "bottom" }
              }}
            />
            </div>
          </div>
        </div>
      </div>
      );
    }
    else{
      return (
        <div className="container py-5 px-5 mt-5 card margin-bottom-36px">
          <h2>Saving Method Comparison</h2>
          no data
        </div>
      );
        
    }
  }


  generateChartData = (yearSpan, type) => {
    let years = yearSpan;
    let crash = 0;
    let chartData;

    // if(type == "Savings Account"){
    //   chartData = [["Years", type]];
    // }
    // else if(type == "Stock Market"){
    //   chartData = [["Years", type]];
    // }

    chartData = [["Years", "Stock Market", "Savings Account"]];
    
    let savings = parseInt(this.state.savings),
        savingsInterest,
        savingstotal,
        isaSavings = parseInt(this.state.savings),
        isaSavingsInterest,
        isaSavingstotal;

    for(let i = 0; i < years; i++) 
    {
      //set base year savings aka year 0 to current savings totals entered in the react state.
      if(i === 0 ){
        savingstotal = savings;
        isaSavingstotal = isaSavings;
      }
      else{
      //standard savings
      savings += this.state.savingsRateAmountPer * this.savingFrequency(this.state.savingsFreq);
      savingsInterest = savings/100*this.state.savingsRate;
      savingstotal = savings + savingsInterest;

      //Stocks
      let YearsInterest;
      if(crash == 8){
        YearsInterest = this.getRandomInt(-20, -10);
        isaSavings += this.state.savingsRateAmountPer * this.savingFrequency(this.state.savingsFreq);
        isaSavingsInterest = isaSavings/100*YearsInterest;
        isaSavingstotal = isaSavings + isaSavingsInterest;
        crash = 0;
      }
      else{
        YearsInterest = this.getRandomInt(6,10);
        isaSavings += this.state.savingsRateAmountPer * this.savingFrequency(this.state.savingsFreq);
        isaSavingsInterest = isaSavings/100*YearsInterest;
        isaSavingstotal = isaSavings + isaSavingsInterest;
      }


    }

    // if(type == "Savings Account"){
    //   chartData.push([parseInt(i),savingstotal]);
      
    // }
    // else if(type == "Stock Market"){
    //   chartData.push([parseInt(i),isaSavingstotal]);
    // }

    chartData.push([parseInt(i),isaSavingstotal,savingstotal]);

    savings = savingstotal;
    isaSavings = isaSavingstotal; 
      crash++;
    }

    return chartData;
  };

  savingFrequency(value) {
    switch (value) {
      case "Weekly":
        return 52
        break;
      case "Biweekly":
        return 26
        break;
      case "Monthly":
        return 12
        break;
      case "Bimonthly":
        return 6
        break;
      case "Quarterly":
        return 4
        break;
      case "Annually":
        return 1
        break;
      default:
        return 0;
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  setState(){
    this.state.salary = localStorage.getItem("salary");
      this.state.userName = localStorage.getItem("userName");
      this.state.savings = localStorage.getItem("savings");
      this.state.savingsRate = localStorage.getItem("savingsRate");
      this.state.savingsFreq = localStorage.getItem("savingsFreq");
      this.state.savingsRateAmountPer = localStorage.getItem(
        "savingsRateAmountPer"
      );
  }

}

export default LineChart;
