//Stock PortFolio Endpoints
//Rajsi Trader's
const express = require('express');
const port = 3000;
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Working Check');
});

app.listen(port, () => {
  console.log('Welcome to Portfolio Stocks Analysis ' + port);
});

// Endpoint : Calculate the Returns of the Stocks added
//Api call : /calculate-returns?boughtAt=300&marketPrice=400&quantity=2

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let result = boughtAt * quantity - marketPrice;
  res.send(result.toString());
});

// Endpoint  Calculate the Total Returns
//Api call : /total-returns?stock1=100&stock2=200&stock3=200&stock4=400

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totRet = stock1 + stock2 + stock3 + stock4;
  res.send(totRet.toString());
});

//Endpoint Calculate the Return Percentage
//Api call : /calculate-return-percentage?boughtAt=400&returns=200

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let percent = ((boughtAt - returns) / boughtAt) * 100;
  res.send(percent.toString());
});

//Endpoint : Calculate the Total Return Percentage
//Api call : /total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totRetPercent = stock1 + stock2 + stock3 + stock4;
  res.send(totRetPercent.toString());
});

//Endpoint Identify the Status of Stocks based on their Return Value
//Api call : /status?returnPercentage=90

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  let stockStatus;

  if (returnPercentage > 0) {
    stockStatus = 'profit';
  } else {
    stockStatus = 'loss';
  }

  res.send(stockStatus);
});
