import Chart from "react-google-charts";
import React from "react";
import { motion } from "framer-motion";

class LineChart extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
      return (
        <div className="container py-3 px-3 mt-5 card margin-bottom-36px">
        <div className="infoCard py-4 px-2 bg-white border-radius-5">
          <div className="row">
            <div className="col-lg-12">
            <h3>Estimated comparisons based on your savings input</h3>
            <Chart
              width={'1050px'}
              height={'500px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['x', 'ISA', 'Standard'],
                [0, 5, 5],
                [1, 5.5, 5.2],
                [2, 6.2, 5.53],
                [3, 7, 5.8],
                [4, 6.7, 6.2],
                [5, 8.8, 6.7],
                [6, 9, 7.3],
                [7, 10, 7.7],
                [8, 12, 8.1],
                [9, 10.8, 8.8],
                [10, 16.5, 9.3],
                [11, 14.2, 10.0],
                [12, 13.4, 10.6],
                [13, 17, 11.1],
                [14, 16, 11.7],
                [15, 18.85, 12.4],
                [16, 20, 13]
              ]}
              options={{
                hAxis: {
                  title: 'Years',
                },
                vAxis: {
                  title: 'GBP (k)',
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

  doSomething = () => {
    
  };
}

export default LineChart;
