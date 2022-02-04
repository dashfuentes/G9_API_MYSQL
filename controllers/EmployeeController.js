const Employee = require( "../models/EmployeeModel" );

exports.findAll = ( req, res ) => {

Employee.getAll( ( err, data ) => {
        if ( err )
            res.status( 500 ).send( {
                message: err.message || "the list the employees is not available!!"
            } );
        else res.send( data );
} );
};

exports.delete = ( req, res ) => {
    Employee.remove( req.params.id, (err) => {
        if ( err ) {
            //id does not exist
            if ( err.message === 'not_found' ) {
                res.status( 400 ).send( {
                    message: `Employee Not found with this id ${req.params.id}`
                } );
            } else {
                res.status( 500 ).send( {
                    message: "Could not delete the employee for some reason!" + req.params.id
                } );
            }
        } else res.send( { message: "employee was deleted with success!!" } );
        
    } );
    
};

exports.create = ( req, res ) => {

    
    //Validate request body
    if ( !req.body ) {
        res.status( 400 ).send( {
            message: "Body cannot be empty!!"
        } );
    }

    const employee = new Employee( {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        job: req.body.job
    } );

       

    Employee.create( employee, ( err, data ) => {
        if ( err ) {
            res.status( 500 ).send( {
                message: err.message || "employee was not create"
            } )
        }
        else res.send( data );
    } );

    
};

exports.updateById = ( req, res ) => {
    //Validate request body
    if ( !req.body ) {
        res.status( 400 ).send( {
            message: "Body cannot be empty!!"
        } );
    }

    Employee.updateById( req.params.id, new Employee( req.body ), ( err, data ) => {

        if ( err ) {
            if ( err.message === 'not_found' ) {
                res.status( 400 ).send( {
                    message: `Employee Not found with this id ${req.params.id}`
                } );
            } else {
                res.status( 500 ).send( {
                    message: "getting an error when update the employee!!"
                } )
            }
        }
        else res.send( data );
    })
}
