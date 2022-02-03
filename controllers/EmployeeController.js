const Employee = require( "../models/EmployeeModel" );

exports.findAll = ( req, res ) => {

    Employee.findAll( ( err, data ) => {
        if ( err )
            res.status( 500 ).send( {
                message: err.message || "the list the employees is not available!!"
            } );
        else res.send( data );
    })
}