
//configuration
//---------------------------------------

const express = require('express'); //for the framework

 //  Object Data Modeling (ODM) library for MongoDB and Node. js.
 //manages relationships between data , it also provide schema validation
 //translate code and represents the code in Mongodb
const mongoose = require('mongoose');

//body-parser is the Node js middleware in body parsing it is responsible for 
// parsing the incoming request bodies 
const bodyParser = require('body-parser');

// Parses the text as URL encoded data (which is how browsers tend to send 
///  form data from regular forms set to POST) and exposes the resulting object
/// (containing the keys and values) on req.body.
const { urlencoded } = require('body-parser');

//assigning to the variable app the instance of express
const app = express();

//Connecting to database
const dbUrl = 'mongodb://127.0.0.1/todoListProject'; //database name must be unique
mongoose.connect(dbUrl,{

    // the following are the mongoose Deprication warnings
    // we make it true to avoid deprecation warning from Mongodb drivers
    useNewUrlParser:true,  
    useCreateIndex:true,
    useUnifiedTopology:true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//we require todoRoute since it is needed in the app.js file
const listRoute = require('./routes/todoRoute');
app.use(listRoute);


app.listen(3000,()=>{
    console.log("The app is listening on port 3000");
});