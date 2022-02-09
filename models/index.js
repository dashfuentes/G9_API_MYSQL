const dbConfig = require( '../database.js' );
const Sequelize = require( 'sequelize' );

const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    operatorAliases: false,
} );
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//importar el modelo
db.movies = require( "./movie.model.js" )( sequelize, Sequelize );
module.exports = db;