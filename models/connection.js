const mysql = require( "mysql2" );
const dbConfig = require( '../database' );

//create a connection with MySql Engine
const conecction = mysql.createConnection( {
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
} );

//execute the connection with mysql engine
conecction.connect( error => {
    if ( error ) throw error;
    console.log( "Succesfully connected!!" )
} );

module.exports = conecction;