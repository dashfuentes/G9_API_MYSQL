const sql = require( './connection' );

//create prototype from my table (Employee)
const Employee = function ( employee ) {
        this.firstName = employee.firstName,
        this.lastName = employee.lastName,
        this.job = employee.job
}

//Business Logic = POST,PUT,DELETE,VALIDATIONS,GET

//GET 
Employee.getAll = result => {
    //select from the table
    sql.query( "SELECT * FROM employees", ( err, res ) => {
        if ( err ) {
            console.log( "error", err );
            result( null, err );
            return;
        }
        console.log( "employees:", res );
        result(null, res)
        })
}

//POST
Employee.create = ( newEmployee, result ) => {
    //insert
    sql.query( "INSERT INTO employees SET ? ", newEmployee, ( err, res ) => {
        if ( err ) {
            console.log( "error", err );
            result( null, err );
            return;
        }
        //return with success + entity(first_name,last_name,job)
        console.log( "employee was created with success!!", { ...newEmployee } );
        result(null, {...newEmployee})
        })
}

//PUT
Employee.updateById = ( id, employee, result ) => {
    //update sql
    sql.query(
        'UPDATE employees SET first_name = ? , last_name = ? , job = ?  WHERE id = ?',
        [employee.firstName, employee.lastName, employee.job, id],
        ( err, res ) => {
            //if we run with errors
            if ( err ) {
                console.log( 'error:', err );
                result( null, err );
                return;
            }
            //if the employee does not exist into the table
            if ( res.affectedRows == 0 ) {
                result( { message: "not found" }, null );
                return
            }
            console.log( "employee record was updated with success!!", { ...employee } );
            result(null, {...employee});

        }
    )
} 

//DELETE
module.exports = Employee;