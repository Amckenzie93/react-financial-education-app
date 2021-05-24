import Chart from "react-google-charts";
import { DataHandler } from "../Services/clientDataHandler"
import React from "react";
import { motion } from "framer-motion";

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
    const data = dataHandlerService.getAllData();
    debugger;
    if (dataHandlerService.validateAll(data)){    
      this.setState();

      return (
        <div className="container py-3 px-3 mt-5 card margin-bottom-36px">
        <div className="py-4 px-2 bg-white border-radius-5">
          <div className="row">
            <div className="col-lg-12">
            <h2>Saving Method Comparison</h2>
            <Chart
            width="100%"
            height={'350px'}
              chartType="LineChart"
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
                  1: { curveType: 'function' },
                },
              }}
              rootProps={{ 'data-testid': '2' }}
            />
            </div>
          </div>
        </div>
      </div>
      );
    }
    else{
      return (
        <div className="container py-3 px-3 mt-5 card margin-bottom-36px">
          <h2>Saving Method Comparison</h2>
          no data
        </div>
      );
        
    }
  }


  generateChartData = () => {
    var years =50;

    var chartData = [ ['x', 'Stocks ISA', 'Standard'] ];
    let savings = parseInt(this.state.savings);
    let savingsInterest = 0;
    let savingstotal = savings;

    let isaSavings = parseInt(this.state.savings);
    let isaSavingsInterest = 0;
    let isaSavingstotal = isaSavings;

    for(var i = 0; i < years; i++) 
    {
      //standard savings
      savings += this.state.savingsRateAmountPer * this.savingFrequency(this.state.savingsFreq);
      savingsInterest = savings/100*this.state.savingsRate;
      savingstotal = savings + savingsInterest;

      //Stocks
      var YearsInterest = this.getRandomInt(-7, 15);
      isaSavings += this.state.savingsRateAmountPer * this.savingFrequency(this.state.savingsFreq);
      isaSavingsInterest = isaSavings/100*YearsInterest;
      isaSavingstotal = isaSavings + isaSavingsInterest;

      chartData.push([parseInt(i),isaSavingstotal,savingstotal]);
      savings = savingstotal;
      isaSavings = isaSavingstotal; 
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
