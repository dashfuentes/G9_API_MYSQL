module.exports = app => {
    
    const movies = require( "../controllers/movie.controller.js" );
    const router = require("express").Router();

    router.post( "/", movies.create ); 
   // router.get( "/", movies.findAll );
    router.put( "/:id", movies.update );

    //https://localhost:3000/api/movies/id


    app.use('/api/movies', router)
}