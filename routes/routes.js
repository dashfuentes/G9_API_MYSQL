module.exports = app => {
    const employees = require( "../controllers/EmployeeController" );

    //url get
    app.get( "/api/employees", employees.findAll );
    //url post
    app.post( "/api/newemployee", employees.create );
    //url put
    app.put( "/api/updatemployee/:id", employees.updateById );
    //url delete
    app.delete('/api/remove/:id', employees.delete)
}