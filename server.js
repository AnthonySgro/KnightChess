const express = require("express");
const app = express();

//html
const homepage = require('./public/js_exports_html/homepage');
const chessPage = require('./public/js_exports_html/chessPage');
const errorPage = require('./public/js_exports_html/error');
const signUp = require('./public/js_exports_html/signUp');

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
