module.exports = app => {
    const employees = require( "../controllers/EmployeeController" );

    //url get
    app.get( "/employees", employees.findAll );
    //url post
    //url put
    //url delete
}