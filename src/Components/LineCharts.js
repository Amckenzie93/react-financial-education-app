import LineChart from './LineChart.js'
import React from 'react';

class LineCharts extends React.Component {

    render() {
        return (
          <div>
            <div className="container py-5 px-5 mt-5 card margin-bottom-36px">
              <h2>Projected examples</h2>
              <p>
                As the world revolves, finance adapts, and so it is never
                possible to accuratly predict the future projections of
                financial plans however what we can do is learn the difference
                in strategy from savings accounts, to stock market investments.
                please see below some examples of your projected finances based
                off the information you have input (this does not take tax into
                account).
              </p>
            </div>
            <LineChart
            //chartType={"Savings Account"}
              title={"Savings Account vs Stock Market"}
              paragraph={
                "Shown below are some interesting comparisons between regular savings accounts and other methods of saving, such as investment in the stock market through the use of stocks and shares ISAS, to... etc"
              }
              listItems={[
                "On average, every 8 Years the stock market crashes",
                "A crash is considered a drop of more than 10%",
                "Market crash severity is randomly generated between 10% - 25%",
                "Stock market gains are randomly generated between 6% - 10%",
              ]}
            />

            {/* <LineChart
            chartType={"Stock Market"}
              title={"Stock Market S&P500"}
              paragraph={
                "Shown below are some interesting comparisons between regular savings accounts and other methods of saving, such as investment in the stock market through the use of stocks and shares ISAS, to... etc"
              }
              listItems={[
                "On average, every 8 Years the stock market crashes",
                "A crash is considered a drop of more than 10%",
                "Market crash severity is randomly generated between 10% - 25%",
                "Stock market gains are randomly generated between 6% - 10%",
              ]}
            /> */}
          </div>
        );
    }
}

export default LineCharts;