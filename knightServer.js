//server and database information
const express = require("express");
const app = express();
const client = require("./sql/databaseConnection");

//html
const homepage = require('./views/homepage');
const chessPage = require('./views/chessPage');
const errorPage = require('./views/error');
const signUp = require('./views/signUp');

//middleware
const morgan = require("morgan");
app.use(morgan('dev'));
app.use(express.static('public'));


app.get("/", (req, res) => {
  res.send(homepage());
})

app.get("/index.html", (req, res) => {
  res.send(homepage());
})

app.get("/sign-up",(req, res) => {
  res.send(signUp());
})

app.get("/play", (req, res) => {
    res.send(chessPage());
});

app.get("*", (req, res) => {
  next(new Error("sgro"));
})

app.use((err, req, res, next) => {
    //this middleware is a errorHandler middleware
    res.send(errorPage());
})

const PORT = 42069;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
