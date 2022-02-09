const express = require( "express" );
const bodyParser = require( "body-parser" );


//initialize express
const app = express();
//parse requests of content-type: application/json
app.use(bodyParser.json());

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//invoke routes


//start server + port
app.listen( 3000, () => {
    console.log("SERVER IS RUNNING!!")
})