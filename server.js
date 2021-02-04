const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan('dev'));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile('./public/index.html');
});

app.use((err, req, res, next) => {
    res.send({ data: err.toString() });
})

const PORT = 42069;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
