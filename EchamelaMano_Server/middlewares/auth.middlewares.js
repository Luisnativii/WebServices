const debug = require("debug")("app:auth-middlewares");
const { verifyToken } = require("../utils/jwt.tools");
const User = require("../models/User.model");

const middlewares = {};
const PREFIX = "Bearer"


middlewares.authentication = async (req, res, next) => {

    try {

        debug("User authentication");

        // 01 - Verificar el autherization
        const { authorization} = req.headers;

        if(!authorization){
            return res.status(401).json({ erorr: "User not authenticated1 "});
        }

        // 02 - validez del token
        // Token => bearer Kjasfkjjsafnjqnef

        const [prefix, token] = authorization.split(" ");

        if(prefix !== PREFIX){
            return res.status(401).json({ error: "User Not authenticate2"});
        }

        if(!token){
            return res.status(401).json({ erorr: "User not autheticate3"});
        }

        const payload = await verifyToken(token);
        
        if(!payload){
            return res.status(401).json({ erorr: "User not autheticate4"});
        }

        const userId = payload["sub"];


        // 03 - verificar el usuario

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ erorr: "User not autheticate4"});
        }

        
        // 04 - comprar el token con los tokens registrados

        const isTokenVaild = user.tokens.includes(token);

        if(!isTokenVaild){
            return res.status(401).json({ erorr: "User not autheticate4"});
        }
        // 05 - modificar la req, para añadir la info del usuario

        req.user = user;
        req.token = token;
        

        next();
    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: "internal server errror"})
        
    }


}

module.exports = middlewares;