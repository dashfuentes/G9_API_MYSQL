const express = require( "express" );
const bodyParser = require( "body-parser" );
const db = require( "./models" )
db.sequelize.sync();


//initialize express
const app = express();
//parse requests of content-type: application/json
app.use(bodyParser.json());

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//invoke routes
require( "./routes/movie.routes" )( app );

//start server + port
app.listen( 3000, () => {
    console.log("SERVER IS RUNNING!!")
})