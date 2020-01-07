const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Users = require('./routes/Users');
const port = process.env.PORT || 5000;

// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )

app.use(cors());

const mongoURI = 'mongodb://localhost:27017/mern_practice_login'
// middleware to connect to MongoDB
mongoose.connect(
  mongoURI,
  {useNewUrlParser : true }
)
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log("error: " + err))

app.use('/users', Users);

app.listen(port, function() {
  console.log("Server is running on " + port)
})
