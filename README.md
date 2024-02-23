# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `yarn install`

Intalls all the dependencies for the project

### `yarn start`

Runs the app in the development mode.

## Folder and Files Structure and Content

### `src/App.js`
The main parent component rendering the application.

### `src/ChartData`

Contains all the data for the stock chart in the files AAPL.csv and data2023.jsonn to plot the chart.

### `src/Components`

Contains all the React Components needed for the project.

### `src/Components/ChartDataController.jsx`

Contains all the logic related to the manipulation of the stock datas and the article datas. In this file we are using all the stock closing price data and the dates for the stock data. We are counting the number of articles/news against the stock data dates and preparing/reforming the data to be suitable for the chart. Additionally, we are also checking the last week's stock price and last month's stock price assuming the current date is in the middle of the stock array. The data is then passed into the StockChart.jsx to plot the chart.

### `src/Components/StockChart.jsx`

Contains the logic related to rendering the Chart. We are using the library react-chartjs to render the data of Closing Stock Price and Number of Articles.

### `src/Components/StockChart.css`

Contains some minor styling in CSS which is used in the StockChart.jsx component.