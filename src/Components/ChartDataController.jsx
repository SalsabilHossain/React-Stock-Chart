import React, { useState, useMemo } from "react";
import chartData from "../ChartData/data2023.json";
import csvFile from "../ChartData/AAPL.csv";
import * as d3 from "d3";
import StockChart from "./StockChart";

const ChartDataController = () => {
  const [stockData, setStockData] = useState([]);
  const [articleCountData, setArticleCountData] = useState([]);

  // this returns all the dates for the stock prices which is used in the x-axis/labels in the chart
  const datesForStockPrices = stockData.map((item) => {
    return item.Date;
  });

  // this returns the closing stock prices which is used to plot the chart
  const closingStockPrices = stockData.map((item) => {
    return item.Close;
  });

  // here we are looking for the number of articles for the stock data dates
  const manipulateChartData = (allStockData) => {
    // we will store the number of articles in this array
    let articleCount = [];

    const actualArticleData = JSON.parse(JSON.stringify(chartData.hits.hits));

    const lookForMatchingDatesWithStockData = (element) => {
      const countArticlesBasedOnDates = actualArticleData.reduce(
        (countDates, currentDate) =>
          countDates + (currentDate._source.DateTime.slice(0, 10) === element),
        0
      );

      articleCount.push(countArticlesBasedOnDates);
    };

    // set the number of articles on the specific date which is used for plotting the chart
    setArticleCountData(articleCount);

    // here we are traversing the stock data array and matching the dates for the stock data and the article dates to count the number of articles
    allStockData.forEach((element) => {
      lookForMatchingDatesWithStockData(element.Date);
    });
  };

  useMemo(() => {
    d3.csv(csvFile).then(function (data) {
      manipulateChartData(data);
      setStockData(data);
    });
  }, []);

  return (
    <StockChart
      firstData={closingStockPrices}
      secondData={articleCountData}
      labels={datesForStockPrices}
    />
  );
};

export default ChartDataController;
