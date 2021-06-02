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
            <h2>Saving Method Comparison</h2>
            <br></br>
            <p>Shown below are some interesting comparisons between regular savings accounts and other methods of saving, such as investment in the stock market through the use of stocks and shares ISAS, to... etc</p>
            <br></br>
            <h4>Scenario details</h4>
            <ul>
              <li>On average, every 8 Years the stock market crashes</li>
              <li>A crash is considered a drop of more than 10%</li>
              <li>Market crash severity is randomly generated between 10% - 25%</li>
              <li>Stock market gains are randomly generated between 6% - 10%</li>
            </ul>
            <br></br>
            <Chart
            width="100%"
            height={'450px'}
              chartType="Line"
              loader={<div>Loading Chart</div>}
              data={this.generateChartData()}
              options={{
                hAxis: {
                  title: 'Years',
                },
                vAxis: {
                  title: 'GBP (k)',
                },
                series: {
                  0: { curveType: 'function' },
                  1: { curveType: 'function' },
                },
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


  generateChartData = () => {
    let years = 51;
    let crash = 0;

    // you have a problem
    let chartData = [["Years", "S&P500", "Savings Account"]],
        savings = parseInt(this.state.savings),
        savingsInterest,
        savingstotal,
        isaSavings = parseInt(this.state.savings),
        isaSavingsInterest,
        isaSavingstotal;

    for(let i = 0; i < years; i++) 
    {
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
