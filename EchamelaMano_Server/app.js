const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require("./config/database.config")
const cors = require("cors")

const apiRouter = require("./routes/index.router")

const app = express();
database.connect();
app.use(cors());
//loger para la request
app.use(logger('dev'));

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');
    
    next();
    })


//establecimiento de las rutas estaticas
app.use(express.static(path.join(__dirname, 'public')));

//api Rauter
app.use("/api", apiRouter);
module.exports = app;
