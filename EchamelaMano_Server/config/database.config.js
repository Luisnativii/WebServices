const Mongoose = require("mongoose");
const debug = require('debug')("app:databace");

//const dbhost = process.env.DBHOST || "localhost";
//const dbport = process.env.DBPORT || "27017";
//const dbname = process.env.DBNAME || "feed-uca";

const dburi = process.env.DBURI;



//METODO DE CONEXION ASINCRONO

const connect = async () => {
    try {
        await Mongoose.connect(dburi)
        debug("Conexion to databace start")
    } catch (error) {
        console.error(error);
        debug("cannot connect to database")
        process.exit(1);
        
    }
}

// METODO DE DESCONEXION DE LA BD 

const disconect = async () => {
    try {
        await Mongoose.disconnect();
        debug("Conexion to databace end")
    } catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconect
}