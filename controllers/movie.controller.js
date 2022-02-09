const db = require( '../models' );
const Movie = db.movies;
const Op = db.Sequelize.Op;

//CREATE
exports.create = ( req, res ) => {

    if ( !req.body ) {
        res.status( 400 ).send( {
            message: "Content can not be empty!!"
        })
    }

    const movie = {
        title: req.body.title,
        description: req.body.description,
        published : req.body.published
    }

    Movie.create( movie )
        .then( data => {
            res.send(data)
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message : err.message || "Some error ocurred while creating the Movie!!"
            })
        })
}

//UPDATE
exports.update = ( req, res ) => {

    const id = req.params.id;

    Movie.update( req.body, {
        where: { id: id }
    } )
        .then( num => {
            if ( num == 1 ) {
                res.send( {
                    message: "Movie was updated with success!!"
                } );
            } else {
                res.send( {
                    message: `Cannot update Movie with that id= ${id}`
                } )
            }
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message: "Error updating the record" + id + err
            } );
        } );
}

//GET


//DELETE


//FIND_BY_ID