const express = require('express');
const mongoose=require('mongoose');
const Blog = require('./models/blog');
const cors=require('cors');
// express app
const app = express();


app.use(cors());
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// connect to mongodb
const dbURI='mongodb+srv://mubariz:1234@nodetuts.icozo.mongodb.net/cricnews?retryWrites=true&w=majority'
mongoose.connect(dbURI, {  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(result => console.log('in db'))
  .catch(err => console.log(err));
// listen routes
app.use("/",require("./routes/blogRoute"));

app.listen(3001);
