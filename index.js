const express = require( "express" );

//initialize express
const app = express();

//invoke routes
require( './routes/routes' )( app );

//start server + port
app.listen( 3000, () => {
    console.log("SERVER IS RUNNING!!")
})